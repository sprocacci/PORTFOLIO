// --- Import Three.js e loader ---
import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// --- SCENA, CAMERA, RENDERER ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(28, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

// --- FUNZIONI UTILI ---
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function updateRendererBackground(hexColor) {
    const rgb = hexToRgb(hexColor);
    if (rgb) {
        const color = new THREE.Color(rgb.r / 255, rgb.g / 255, rgb.b / 255);
        renderer.setClearColor(color);
        document.body.style.backgroundColor = hexColor;
    }
}

// --- COLOR PICKER PERSONALIZZATO ---
const colorPicker = document.getElementById('backgroundColorPicker');
const swatch = document.getElementById('swatch');

// Colore iniziale
const initialColor = colorPicker.value;
swatch.style.backgroundColor = initialColor;
updateRendererBackground(initialColor);

// Listener per aggiornamento colore
colorPicker.addEventListener('input', (e) => {
    const color = e.target.value;
    swatch.style.backgroundColor = color;
    updateRendererBackground(color);
});

// --- CONTROLLI CAMERA ---
const controls = new TrackballControls(camera, renderer.domElement);
controls.noZoom = false;
controls.noPan = false;
controls.staticMoving = true;
controls.dynamicDampingFactor = 0.3;
camera.position.z = 330;

// --- ENVIRONMENT MAP ---
const cubeTextureLoader = new THREE.CubeTextureLoader();
const envMap = cubeTextureLoader.setPath('/textures/cube/Bridge2/').load([
    'posx.jpg', 'negx.jpg',
    'posy.jpg', 'negy.jpg',
    'posz.jpg', 'negz.jpg'
]);
envMap.colorSpace = THREE.SRGBColorSpace;
scene.environment = envMap;

// --- LUCI ---
const ambientLight = new THREE.AmbientLight(0x404040, 1);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(ambientLight);
scene.add(directionalLight);

function setOldLighting() {
    ambientLight.intensity = 1;
    directionalLight.intensity = 1;
    directionalLight.color.set(0xffffff);
    directionalLight.position.set(1, 1, 1).normalize();
}

function setNewLighting() {
    ambientLight.intensity = 1;
    directionalLight.intensity = 3;
    directionalLight.color.set(0xffffff);
    directionalLight.position.set(5, 10, 7.5);
}
setNewLighting();

// --- LOADER GLTF ---
const loader = new GLTFLoader();
let gltfModel;
let modelParent;
const originalMaterials = new Map();

loader.load(
    'models/CDD_Logo_Estrusione.gltf',
    (gltf) => {
        gltfModel = gltf.scene;
        const box = new THREE.Box3().setFromObject(gltfModel);
        const center = box.getCenter(new THREE.Vector3());
        modelParent = new THREE.Object3D();
        gltfModel.position.sub(center);

        gltfModel.traverse((child) => {
            if (child.isMesh) {
                originalMaterials.set(child.uuid, child.material.clone());
            }
        });

        applyNewMaterials();

        modelParent.add(gltfModel);
        scene.add(modelParent);

        updateResetButtonState();
    },
    (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% caricato'),
    (error) => console.error('Errore nel caricamento del modello: ', error)
);

let usingOriginalMaterials = false;
const resetButton = document.getElementById('resetButton');

function applyNewMaterials() {
    if (!gltfModel) return;
    gltfModel.traverse((child) => {
        if (child.isMesh) {
            child.material = new THREE.MeshPhysicalMaterial({
                color: 0xaaaaaa,
                metalness: 1.0,
                roughness: 0.05,
                envMap: envMap,
                envMapIntensity: 2.0,
                clearcoat: 1.0,
                clearcoatRoughness: 0.05
            });
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.needsUpdate = true;
        }
    });
    scene.environment = envMap;
    setNewLighting();
    usingOriginalMaterials = false;
    updateResetButtonState();
}

function resetMaterialsToOriginal() {
    if (!gltfModel) return;
    gltfModel.traverse((child) => {
        if (child.isMesh) {
            const originalMaterial = originalMaterials.get(child.uuid);
            if (originalMaterial) {
                child.material = originalMaterial;
                child.material.needsUpdate = true;
            }
        }
    });
    scene.environment = null;
    setOldLighting();
    usingOriginalMaterials = true;
    updateResetButtonState();
}

function updateResetButtonState() {
    if (usingOriginalMaterials) {
        resetButton.classList.remove('inactive');
        resetButton.style.cursor = 'pointer';
    } else {
        resetButton.classList.add('inactive');
        resetButton.style.cursor = 'default';
    }
}

resetButton.addEventListener('click', () => {
    if (usingOriginalMaterials) {
        applyNewMaterials();
    } else {
        resetMaterialsToOriginal();
    }
});

// --- ROTAZIONE MODELLO ---
let lastMousePosition = new THREE.Vector2(0, 0);
let rotationSpeedX = 0.01;
let rotationSpeedY = 0.01;
let targetRotationSpeedX = 0;
let targetRotationSpeedY = 0;
let rotating = false;
let isStopped = false;
let inertia = 0.985;
let acceleration = 0.1;
let initialBoostX = 0;
let initialBoostY = 0;

function animate() {
    requestAnimationFrame(animate);

    if (modelParent && !isStopped) {
        rotationSpeedX += (targetRotationSpeedX - rotationSpeedX) * acceleration;
        rotationSpeedY += (targetRotationSpeedY - rotationSpeedY) * acceleration;

        if (initialBoostX > 0 || initialBoostY > 0) {
            rotationSpeedX += initialBoostX;
            rotationSpeedY += initialBoostY;
            initialBoostX *= inertia;
            initialBoostY *= inertia;
        }

        modelParent.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), rotationSpeedX);
        modelParent.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), rotationSpeedY);

        if (!rotating) {
            rotationSpeedX *= inertia;
            rotationSpeedY *= inertia;
            if (Math.abs(rotationSpeedX) < 0.0001 && Math.abs(rotationSpeedY) < 0.0001) {
                rotationSpeedX = 0;
                rotationSpeedY = 0;
                isStopped = true;
            }
        }
    }

    controls.update();
    renderer.render(scene, camera);
}

// --- EVENTI MOUSE ---
renderer.domElement.addEventListener('mousedown', (event) => {
    if (modelParent) {
        const mouseX = (event.clientX / window.innerWidth) * 2 + 1;
        const mouseY = (event.clientY / window.innerHeight) * 2 + 1;
        lastMousePosition.set(mouseX, mouseY);
        rotating = true;
        isStopped = true;
    }
});

renderer.domElement.addEventListener('mousemove', (event) => {
    if (modelParent && rotating) {
        const mouseX = (event.clientX / window.innerWidth) * 2 + 1;
        const mouseY = (event.clientY / window.innerHeight) * 2 + 1;
        const currentMousePosition = new THREE.Vector2(mouseX, mouseY);
        const movementDirection = currentMousePosition.clone().sub(lastMousePosition);

        if (movementDirection.length() > 0) {
            targetRotationSpeedX = movementDirection.y * 0.05;
            targetRotationSpeedY = movementDirection.x * 0.05;
            initialBoostX = movementDirection.y * 0.1;
            initialBoostY = movementDirection.x * 0.1;
        }

        lastMousePosition.copy(currentMousePosition);
    }
});

renderer.domElement.addEventListener('mouseup', () => {
    rotating = false;
    isStopped = false;
});

// --- RESIZE ---
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
});

// --- AVVIO ANIMAZIONE ---
animate();
