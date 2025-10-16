// ================= REDIRECT FUNCTIONS =================
function redirectToPrintPage() {
    window.location.href = "index_punkprint.html";
}
function redirectToCDDPage() {
    window.location.href = "index_cdd.html";
}
function redirectToHysterischePage() {
    window.location.href = "index_hysterische.html";
}
function redirectToCDDVideo() {
    window.location.href = "https://www.instagram.com/p/DC4ezoNuBe_/";
}
function redirectTo10PPGitPage() {
    window.location.href = "https://github.com/sprocacci/archive-2024/tree/main/sprocacci/10_PRINT_VARIATION";
}

// Funzione per aggiornare le keywords
function aggiornaKeywords(keywords) {
    const keywordsContainer = document.getElementById('keywords-container');
    if (!keywordsContainer) return;
    
    if (keywords && keywords.length > 0) {
        keywordsContainer.classList.remove('hidden');
        keywordsContainer.innerHTML = '';
        keywords.forEach(keyword => {
            const span = document.createElement('span');
            span.className = 'keyword';
            span.textContent = keyword;
            
            if (!keyword.trim().includes(' ')) {
                span.classList.add('single-word');
            }
            
            keywordsContainer.appendChild(span);
        });
        
        // Aggiorna la posizione dopo aver aggiunto il contenuto
        setTimeout(updateKeywordsPosition, 0);
    } else {
        keywordsContainer.classList.add('hidden');
        keywordsContainer.innerHTML = '';
    }
}

function updateKeywordsPosition() {
    const titolo = document.getElementById('titolo-h1');
    const keywordsContainer = document.getElementById('keywords-container');
    
    if (titolo && keywordsContainer) {
        const titoloRect = titolo.getBoundingClientRect();
        const titoloTop = parseFloat(window.getComputedStyle(titolo).top);
        
        // Calcola la nuova posizione: altezza del titolo + margine
        const newTop = titoloTop + titoloRect.height + 0; 
        keywordsContainer.style.top = newTop + 'px';
    }
}

// Event listeners per aggiornare la posizione al resize
window.addEventListener('resize', updateKeywordsPosition);
window.addEventListener('load', updateKeywordsPosition);

// ================= NAVIGAZIONE TASTIERA E MOUSE SINCRONIZZATA CON SCROLL =================
let currentButtonIndex = -1; 
let isKeyboardNavigating = false; 
let lastInteractionWasMouse = false; 
let mouseIsOverButton = false; // Nuovo flag per tracciare se il mouse è sopra un bottone

// Funzione per gestire lo scroll automatico
function scrollToElementIfNeeded(element) {
    if (!element) return;
    
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    
    // Margine di sicurezza per evitare che l'elemento sia troppo vicino ai bordi
    const margin = 28;
    
    let scrollX = 0;
    let scrollY = 0;
    let needsScroll = false;
    
    // Verifica se l'elemento è fuori dalla viewport verticalmente
    if (rect.top < margin) {
        // L'elemento è sopra la viewport
        scrollY = window.pageYOffset + rect.top - margin;
        needsScroll = true;
    } else if (rect.bottom > viewportHeight - margin) {
        // L'elemento è sotto la viewport
        scrollY = window.pageYOffset + rect.bottom - viewportHeight + margin;
        needsScroll = true;
    }
    
    // Verifica se l'elemento è fuori dalla viewport orizzontalmente
    if (rect.left < margin) {
        // L'elemento è a sinistra della viewport
        scrollX = window.pageXOffset + rect.left - margin;
        needsScroll = true;
    } else if (rect.right > viewportWidth - margin) {
        // L'elemento è a destra della viewport
        scrollX = window.pageXOffset + rect.right - viewportWidth + margin;
        needsScroll = true;
    }
    
    // Esegui lo scroll se necessario
    if (needsScroll) {
        // Usa scrollTo per uno scroll fluido
        window.scrollTo({
            left: scrollX || window.pageXOffset,
            top: scrollY || window.pageYOffset,
            behavior: 'smooth'
        });
    }
}

function updateButtonHighlight() {
    const buttons = Array.from(document.querySelectorAll('.back-button, .link-button'));

    // Rimuovi highlight da tutti i bottoni
    buttons.forEach(btn => btn.classList.remove('keyboard-selected'));

    if (currentButtonIndex >= 0 && currentButtonIndex < buttons.length && isKeyboardNavigating) {
        const btn = buttons[currentButtonIndex];
        btn.classList.add('keyboard-selected');

        // Focus solo se necessario
        try {
            btn.focus({ preventScroll: true });
        } catch {
            btn.focus();
        }
        
        // SCROLL AUTOMATICO: verifica se l'elemento è visibile nella viewport
        scrollToElementIfNeeded(btn);
    }
}

function syncFromMouseToKeyboard(targetElement) {
    const buttons = Array.from(document.querySelectorAll('.back-button, .link-button'));
    const newIndex = buttons.indexOf(targetElement);
    
    if (newIndex !== -1) {
        // Se stiamo passando da navigazione tastiera a mouse
        if (isKeyboardNavigating) {
            // Disattiva la navigazione tastiera
            isKeyboardNavigating = false;
            // Rimuovi tutti gli highlight della tastiera
            buttons.forEach(btn => btn.classList.remove('keyboard-selected'));
        }
        
        currentButtonIndex = newIndex;
        lastInteractionWasMouse = true;
        mouseIsOverButton = true;
        
        // Aggiungi highlight solo al bottone corrente (stile mouse)
        buttons.forEach(btn => btn.classList.remove('keyboard-selected'));
        targetElement.classList.add('keyboard-selected');
        
        console.log(`Mouse sync: currentButtonIndex = ${currentButtonIndex}, keyboardNav = ${isKeyboardNavigating}`);
    }
}

function clearAllHighlights() {
    if (!isKeyboardNavigating) {
        const buttons = Array.from(document.querySelectorAll('.back-button, .link-button'));
        buttons.forEach(btn => btn.classList.remove('keyboard-selected'));
        mouseIsOverButton = false;
        console.log('All highlights cleared');
    }
}

function findSelectedButton() {
    const selectedContentButton = document.querySelector('.back-button.selected, .link-button.selected');
    if (selectedContentButton) {
        return selectedContentButton;
    }
    return null;
}

function getSelectedButtonIndex() {
    const buttons = Array.from(document.querySelectorAll('.back-button, .link-button'));
    const selectedButton = findSelectedButton();
    
    if (selectedButton) {
        return buttons.indexOf(selectedButton);
    }
    
    return -1;
}

function handleKeyboardNavigation(event) {
    const buttons = Array.from(document.querySelectorAll('.back-button, .link-button'));
    if (buttons.length === 0) return;

    switch (event.key) {
        case 'ArrowDown':
            event.preventDefault();
            
            // Se non stiamo già navigando con la tastiera, inizializza
            if (!isKeyboardNavigating) {
                // Disabilita qualsiasi highlight del mouse
                clearAllHighlights();
                
                // PRIORITÀ 1: Bottone selezionato
                const selectedIndexDown = getSelectedButtonIndex();
                if (selectedIndexDown !== -1) {
                    currentButtonIndex = selectedIndexDown;
                    console.log(`Starting navigation from selected button at index: ${currentButtonIndex}`);
                }
                // PRIORITÀ 2: Ultima interazione mouse
                else if (lastInteractionWasMouse && currentButtonIndex !== -1) {
                    console.log(`Starting navigation from mouse position: ${currentButtonIndex}`);
                } 
                // PRIORITÀ 3: Prima volta
                else {
                    currentButtonIndex = 0;
                }
            } else {
                // Navigazione normale
                currentButtonIndex = (currentButtonIndex + 1) % buttons.length;
            }
            
            isKeyboardNavigating = true;
            lastInteractionWasMouse = false;
            mouseIsOverButton = false;
            updateButtonHighlight();
            break;

        case 'ArrowUp':
            event.preventDefault();
            
            // Se non stiamo già navigando con la tastiera, inizializza
            if (!isKeyboardNavigating) {
                // Disabilita qualsiasi highlight del mouse
                clearAllHighlights();
                
                // PRIORITÀ 1: Bottone selezionato
                const selectedIndexUp = getSelectedButtonIndex();
                if (selectedIndexUp !== -1) {
                    currentButtonIndex = selectedIndexUp;
                    console.log(`Starting navigation from selected button at index: ${currentButtonIndex}`);
                    currentButtonIndex = (currentButtonIndex - 1 + buttons.length) % buttons.length;
                }
                // PRIORITÀ 2: Ultima interazione mouse
                else if (lastInteractionWasMouse && currentButtonIndex !== -1) {
                    console.log(`Starting navigation from mouse position: ${currentButtonIndex}`);
                    currentButtonIndex = (currentButtonIndex - 1 + buttons.length) % buttons.length;
                } 
                // PRIORITÀ 3: Prima volta
                else {
                    currentButtonIndex = buttons.length - 1;
                }
            } else {
                // Navigazione normale
                currentButtonIndex = (currentButtonIndex - 1 + buttons.length) % buttons.length;
            }
            
            isKeyboardNavigating = true;
            lastInteractionWasMouse = false;
            mouseIsOverButton = false;
            updateButtonHighlight();
            break;

        case 'Enter':
            event.preventDefault();
            if (buttons[currentButtonIndex]) {
                buttons[currentButtonIndex].click();
            }
            break;

        case 'Escape':
            event.preventDefault();
            resetAllContainers();
            currentButtonIndex = -1;
            isKeyboardNavigating = false;
            lastInteractionWasMouse = false;
            mouseIsOverButton = false;
            buttons.forEach(btn => {
                btn.classList.remove('keyboard-selected');
                btn.blur();
            });
            break;
    }
}

// ================= GESTIONE EVENTI MOUSE =================

// Click sui bottoni
document.addEventListener('click', (e) => {
    const targetButton = e.target.closest('.back-button, .link-button');
    if (targetButton) {
        syncFromMouseToKeyboard(targetButton);
    }
});

// Hover sui bottoni
document.addEventListener('mouseover', (e) => {
    const targetButton = e.target.closest('.back-button, .link-button');
    if (targetButton) {
        syncFromMouseToKeyboard(targetButton);
    }
});

// Mouse esce da un bottone
document.addEventListener('mouseout', (e) => {
    const targetButton = e.target.closest('.back-button, .link-button');
    if (targetButton) {
        const relatedTarget = e.relatedTarget;
        // Verifica se il mouse sta davvero uscendo dall'elemento
        if (!targetButton.contains(relatedTarget)) {
            mouseIsOverButton = false;
            // Solo se non stiamo navigando con la tastiera, rimuovi l'highlight
            if (!isKeyboardNavigating) {
                clearAllHighlights();
            }
        }
    }
});

// Movimento generale del mouse - importante per rilevare quando esce completamente dall'area bottoni
document.addEventListener('mousemove', (e) => {
    const targetButton = e.target.closest('.back-button, .link-button');
    
    if (!targetButton && !isKeyboardNavigating) {
        // Il mouse non è su nessun bottone e non stiamo navigando con la tastiera
        if (mouseIsOverButton) {
            clearAllHighlights();
            currentButtonIndex = -1;
            lastInteractionWasMouse = false;
        }
    }
});

// Focus management - migliorato per gestire la transizione
document.addEventListener('focusin', (e) => {
    const buttons = Array.from(document.querySelectorAll('.back-button, .link-button'));
    const targetButton = e.target.closest('.back-button, .link-button');
    
    if (targetButton) {
        const idx = buttons.indexOf(targetButton);
        if (idx !== -1) {
            // Se il focus è dovuto a Tab (non alle nostre frecce)
            if (!isKeyboardNavigating) {
                syncFromMouseToKeyboard(targetButton);
            } else {
                // Se invece siamo in navigazione tastiera, aggiorna l'indice
                currentButtonIndex = idx;
            }
        }
    }
});

// Event listener principale per la tastiera
document.addEventListener('keydown', handleKeyboardNavigation);

// Reset function (deve essere accessibile globalmente)
function resetAllContainers() {
    const imgMain = document.getElementById('Immagine_Centrata');
    const containerSet1 = document.querySelector('.container-set1');
    const containerSet2 = document.querySelector('.container-set2');
    const containerSet3 = document.querySelector('.container-set3');
    const containerSet4 = document.querySelector('.container-set4');
    const containerSet5 = document.querySelector('.container-set5');
    // Aggiungi i nuovi container
    const containerSet6 = document.querySelector('.container-set6');
    const containerSet7 = document.querySelector('.container-set7');
    const containerSet8 = document.querySelector('.container-set8');
    const containerSet9 = document.querySelector('.container-set9');
    const containerSet10 = document.querySelector('.container-set10');
    const containerSet11 = document.querySelector('.container-set11');
    const containerSet12 = document.querySelector('.container-set12');
    const containerSet13 = document.querySelector('.container-set13');
    const containerSet14 = document.querySelector('.container-set14');
    
    const titolo = document.getElementById('titolo-h1');
    const testoContenuto = document.getElementById('testo-contenuto');
    const bottoneA = document.querySelector("button[onclick*='set1']");
    const bottoneB = document.querySelector("button[onclick*='set2']");
    const bottoneC = document.querySelector("button[onclick*='set3']");
    const bottoneD = document.querySelector("button[onclick*='set4']");
    const bottoneE = document.querySelector("button[onclick*='set5']");
    // Aggiungi i nuovi bottoni
    const bottone6 = document.querySelector("button[onclick*='set6']");
    const bottone7 = document.querySelector("button[onclick*='set7']");
    const bottone8 = document.querySelector("button[onclick*='set8']");
    const bottone9 = document.querySelector("button[onclick*='set9']");
    const bottone10 = document.querySelector("button[onclick*='set10']");
    const bottone11 = document.querySelector("button[onclick*='set11']");
    const bottone12 = document.querySelector("button[onclick*='set12']");
    const bottone13 = document.querySelector("button[onclick*='set13']");
    const bottone14 = document.querySelector("button[onclick*='set14']");
    
    const defaultImg = 'immagini/base/wp5404034-59414419.png';
    const defaultTitolo = 'Who I am';
    const defaultTesto = testoContenuto ? testoContenuto.dataset.default : '';

    fermaRotazioneImmaginiSet3(); // stop immagini random set3
    aggiornaKeywords([]); // Array vuoto = nascondi
    
    if (containerSet1) containerSet1.classList.add('hidden');
    if (containerSet2) containerSet2.classList.add('hidden');
    if (containerSet3) containerSet3.classList.add('hidden');
    if (containerSet4) containerSet4.classList.add('hidden');
    if (containerSet5) containerSet5.classList.add('hidden');
    if (containerSet6) containerSet6.classList.add('hidden');
    if (containerSet7) containerSet7.classList.add('hidden');
    if (containerSet8) containerSet8.classList.add('hidden');
    if (containerSet9) containerSet9.classList.add('hidden');
    if (containerSet10) containerSet10.classList.add('hidden');
    if (containerSet11) containerSet11.classList.add('hidden');
    if (containerSet12) containerSet12.classList.add('hidden');
    if (containerSet13) containerSet13.classList.add('hidden');
    if (containerSet14) containerSet14.classList.add('hidden');
    
    if (imgMain) {
        imgMain.classList.remove('hidden');
        imgMain.src = defaultImg;
    }
    
    if (titolo) titolo.textContent = defaultTitolo;
    if (testoContenuto) testoContenuto.innerHTML = defaultTesto;
    
    bottoneA?.classList.remove('selected');
    bottoneB?.classList.remove('selected');
    bottoneC?.classList.remove('selected');
    bottoneD?.classList.remove('selected');
    bottoneE?.classList.remove('selected');
    bottone6?.classList.remove('selected');
    bottone7?.classList.remove('selected');
    bottone8?.classList.remove('selected');
    bottone9?.classList.remove('selected');
    bottone10?.classList.remove('selected');
    bottone11?.classList.remove('selected');
    bottone12?.classList.remove('selected');
    bottone13?.classList.remove('selected');
    bottone14?.classList.remove('selected');

    // Reset navigation state
    currentButtonIndex = -1;
    isKeyboardNavigating = false;
    lastInteractionWasMouse = false;
    mouseIsOverButton = false;
    
    const buttons = document.querySelectorAll('.back-button, .link-button');
    buttons.forEach(btn => {
        btn.classList.remove('keyboard-selected');
        btn.blur();
    });
}

// ================= BOTTONI EXTRA =================
function aggiungiBottone(testo, funzioneCallback, indice) {
    const body = document.body;
    const nuovoBottone = document.createElement('div');
    nuovoBottone.className = 'bottone bottone-extra';
    nuovoBottone.setAttribute('data-index', indice);
    nuovoBottone.style.setProperty('--button-index', indice);

    const button = document.createElement('button');
    button.className = 'back-button';
    button.textContent = testo;
    button.onclick = funzioneCallback;

    nuovoBottone.appendChild(button);
    body.appendChild(nuovoBottone);
}

// ================= SCROLL LOCK =================
function disableScroll() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    const titolo = document.getElementById('titolo-h1');
    if (titolo && scrollbarWidth > 0) {
        titolo.style.transform = `translateX(calc(-50% - ${scrollbarWidth / 2}px))`;
    }
}
function enableScroll() {
    document.body.style.overflow = '';
    const titolo = document.getElementById('titolo-h1');
    if (titolo) {
        titolo.style.transform = 'translateX(-50%)';
    }
}

// ================= VIDEO CACHE =================
const videoCache = {};

function preloadVideo(key, src) {
    const video = document.createElement('video');
    video.src = src;
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.crossOrigin = 'anonymous'; // Aiuta con la cache
    
    // Forza il caricamento completo
    video.addEventListener('loadeddata', () => {
        console.log(`Video ${key} preloaded`);
    });
    
    video.load();
    video.style.display = 'none';
    videoCache[key] = video;
}

// ================= IMMAGINI RANDOM (SET3) =================
var immaginiJSON = [];
var intervalloImmaginiSet3 = null;

function caricaImmaginiJSON(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', './image.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            immaginiJSON = JSON.parse(xhr.responseText).map(item => item.URL);
            callback();
        }
    };
    xhr.send(null);
}

function selezionaImmagineCasuale() {
    if (immaginiJSON.length === 0) return null;
    var i = Math.floor(Math.random() * immaginiJSON.length);
    return immaginiJSON[i];
}

function avviaRotazioneImmaginiSet3() {
    const imgSet3 = document.getElementById('immagine-set3');
    if (!imgSet3) return;
    
    // IMMAGINE SEGNAPOSTO - Sostituisci con il percorso della tua immagine
    const immaginePlaceholder = 'immagini/set/placeholder_hysterische.jpg';
    
    // Mostra subito il placeholder
    imgSet3.src = immaginePlaceholder;
    
    // Se le immagini JSON sono caricate, avvia la rotazione
    if (immaginiJSON.length > 0) {
        // Dopo un breve delay, passa alla prima immagine random
        setTimeout(() => {
            imgSet3.src = selezionaImmagineCasuale();
        }, 100);
        
        // Poi avvia l'intervallo per cambiare le immagini
        intervalloImmaginiSet3 = setInterval(() => {
            imgSet3.src = selezionaImmagineCasuale();
        }, 2000);
    }
}

function fermaRotazioneImmaginiSet3() {
    if (intervalloImmaginiSet3) clearInterval(intervalloImmaginiSet3);
    intervalloImmaginiSet3 = null;
}

// ================= RANDOMIZE POSIZIONE IMMAGINI =================
function randomizeImagePositions(container) {
    const images = container.querySelectorAll('.randomized-image');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const imageSize = 100;
    const margin = 10;
    const occupied = [];

    // Funzione helper per ottenere coordinate assolute
    function getAbsoluteRect(element) {
        const rect = element.getBoundingClientRect();
        return {
            left: rect.left + window.pageXOffset,
            top: rect.top + window.pageYOffset,
            right: rect.right + window.pageXOffset,
            bottom: rect.bottom + window.pageYOffset,
            width: rect.width,
            height: rect.height
        };
    }
    
    // Ottieni le aree occupate dai testi
    const testoContenuto = document.getElementById('testo-contenuto');
    const titolo = document.getElementById('titolo-h1');
    const keywordsContainer = document.getElementById('keywords-container');
    
    const safetyMargin = margin * 4;
    
    if (testoContenuto && testoContenuto.offsetParent !== null) {
        const rect = getAbsoluteRect(testoContenuto);
        occupied.push({
            left: rect.left - safetyMargin,
            top: rect.top - safetyMargin,
            right: rect.right + safetyMargin,
            bottom: rect.bottom + safetyMargin
        });
    }
    
    if (titolo && titolo.offsetParent !== null) {
        const rect = getAbsoluteRect(titolo);
        occupied.push({
            left: rect.left - safetyMargin,
            top: rect.top - safetyMargin,
            right: rect.right + safetyMargin,
            bottom: rect.bottom + safetyMargin
        });
    }
    
    if (keywordsContainer && !keywordsContainer.classList.contains('hidden') && keywordsContainer.offsetParent !== null) {
        const rect = getAbsoluteRect(keywordsContainer);
        occupied.push({
            left: rect.left - safetyMargin,
            top: rect.top - safetyMargin,
            right: rect.right + safetyMargin,
            bottom: rect.bottom + safetyMargin
        });
    }

    // NUOVA STRATEGIA: Dividi lo schermo in griglia e distribuisci uniformemente
    const numImages = images.length;
    const cols = Math.ceil(Math.sqrt(numImages * (viewportWidth / viewportHeight)));
    const rows = Math.ceil(numImages / cols);
    
    // Crea array di celle disponibili
    const cells = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            cells.push({ row, col });
        }
    }
    
    // Mescola le celle per distribuzione randomica ma uniforme
    for (let i = cells.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cells[i], cells[j]] = [cells[j], cells[i]];
    }
    
    const cellWidth = viewportWidth / cols;
    const cellHeight = viewportHeight / rows;
    
    // Posiziona le immagini
    images.forEach((img, index) => {
        let placed = false;
        let attempts = 0;
        const maxAttempts = 50;
        
        // Prova prima con la cella assegnata
        if (index < cells.length) {
            const cell = cells[index];
            
            while (!placed && attempts < maxAttempts) {
                // Posizione randomica all'interno della cella
                const cellX = cell.col * cellWidth;
                const cellY = cell.row * cellHeight;
                
                // Aggiungi variazione randomica dentro la cella (80% della dimensione per evitare bordi)
                const randomX = cellX + Math.random() * (cellWidth - imageSize) * 0.8 + (cellWidth * 0.1);
                const randomY = cellY + Math.random() * (cellHeight - imageSize) * 0.8 + (cellHeight * 0.1);
                
                const x = randomX + window.pageXOffset;
                const y = randomY + window.pageYOffset;

                const overlap = occupied.some(pos => (
                    x < pos.right + margin &&
                    x + imageSize + margin > pos.left &&
                    y < pos.bottom + margin &&
                    y + imageSize + margin > pos.top
                ));

                if (!overlap) {
                    img.style.left = x + 'px';
                    img.style.top = y + 'px';
                    occupied.push({ 
                        left: x, 
                        top: y, 
                        right: x + imageSize, 
                        bottom: y + imageSize 
                    });
                    placed = true;
                }
                attempts++;
            }
        }
        
        // Se non è riuscito con la cella, prova posizionamento casuale globale
        if (!placed) {
            attempts = 0;
            while (!placed && attempts < 100) {
                const x = Math.random() * (viewportWidth - imageSize) + window.pageXOffset;
                const y = Math.random() * (viewportHeight - imageSize) + window.pageYOffset;

                const overlap = occupied.some(pos => (
                    x < pos.right + margin &&
                    x + imageSize + margin > pos.left &&
                    y < pos.bottom + margin &&
                    y + imageSize + margin > pos.top
                ));

                if (!overlap) {
                    img.style.left = x + 'px';
                    img.style.top = y + 'px';
                    occupied.push({ 
                        left: x, 
                        top: y, 
                        right: x + imageSize, 
                        bottom: y + imageSize 
                    });
                    placed = true;
                }
                attempts++;
            }
        }
        
        // Ultimo fallback: posiziona negli angoli
        if (!placed) {
            const corners = [
                { x: margin, y: margin }, // Alto-Sinistra
                { x: viewportWidth - imageSize - margin, y: margin }, // Alto-Destra
                { x: margin, y: viewportHeight - imageSize - margin }, // Basso-Sinistra
                { x: viewportWidth - imageSize - margin, y: viewportHeight - imageSize - margin } // Basso-Destra
            ];
            
            const corner = corners[index % corners.length];
            img.style.left = (corner.x + window.pageXOffset) + 'px';
            img.style.top = (corner.y + window.pageYOffset) + 'px';
        }
    });
}

// ================= DOM READY =================
document.addEventListener('DOMContentLoaded', function () {
    const imgMain = document.getElementById('Immagine_Centrata');
    const imgHover = document.getElementById('Immagine_Sottostante');

    // ================= FUNZIONI HOVER (SPOSTATE QUI) =================
    function showHoverImage(src) {
        disableScroll();
        if (imgHover) {
            imgHover.src = src;
            resizeImageToFillViewport(imgHover, src);
            imgHover.classList.remove('hidden');
            requestAnimationFrame(() => imgHover.classList.add('fullscreen'));
        }
    }
    
    function hideHoverImage() {
        enableScroll();
        if (imgHover) {
            imgHover.classList.remove('fullscreen');
            imgHover.classList.add('hidden');
            imgHover.src = '';
            imgHover.style.cssText = '';
        }
    }
    
    function showHoverVideo(videoKey) {
        disableScroll();
        
        let displayVideo = document.getElementById('hover-video');
        
        // Se il video esiste già e corrisponde alla stessa key, riutilizzalo
        if (displayVideo && displayVideo.dataset.videoKey === videoKey) {
            displayVideo.style.display = 'block';
            displayVideo.classList.add('fullscreen');
            displayVideo.currentTime = 0;
            displayVideo.play().catch(e => console.log('Play error:', e));
            return;
        }
        
        // Rimuovi il video esistente se diverso
        if (displayVideo) {
            displayVideo.remove();
        }
        
        const video = videoCache[videoKey];
        if (!video) {
            console.error('Video non trovato:', videoKey);
            return;
        }
        
        // Usa direttamente il video dalla cache invece di clonarlo
        displayVideo = video;
        displayVideo.id = 'hover-video';
        displayVideo.dataset.videoKey = videoKey;
        displayVideo.style.display = 'block';
        displayVideo.style.position = 'fixed';
        displayVideo.style.left = '50%';
        displayVideo.style.top = '50%';
        displayVideo.style.transform = 'translate(-50%, -50%)';
        displayVideo.style.maxWidth = '100%';
        displayVideo.style.maxHeight = '100%';
        displayVideo.classList.add('fullscreen');
        displayVideo.loop = true;
        displayVideo.currentTime = 0;
        
        if (!displayVideo.parentElement) {
            document.body.appendChild(displayVideo);
        }
        
        displayVideo.play().catch(e => console.log('Play error:', e));
    }
    
        function hideHoverMedia() {
        enableScroll();
        
        if (imgHover) {
            imgHover.classList.remove('fullscreen');
            imgHover.classList.add('hidden');
            imgHover.src = '';
            imgHover.style.cssText = '';
        }
        
        const v = document.getElementById('hover-video');
        if (v) { 
            v.pause();
            v.style.display = 'none';
            v.classList.remove('fullscreen');
            // Non rimuoverlo, nascondilo solo per riutilizzarlo
        }
    }

    //CONTAINER SET
    const containerSet1 = document.querySelector('.container-set1');
    const containerSet2 = document.querySelector('.container-set2');
    const containerSet3 = document.querySelector('.container-set3');
    const containerSet4 = document.querySelector('.container-set4');
    const containerSet5 = document.querySelector('.container-set5');
    // Container fuori viewport
    const containerSet6 = document.querySelector('.container-set6');
    const containerSet7 = document.querySelector('.container-set7');
    const containerSet8 = document.querySelector('.container-set8');
    const containerSet9 = document.querySelector('.container-set9');
    const containerSet10 = document.querySelector('.container-set10');
    const containerSet11 = document.querySelector('.container-set11');
    const containerSet12 = document.querySelector('.container-set12');
    const containerSet13 = document.querySelector('.container-set13');
    const containerSet14 = document.querySelector('.container-set14');
    
    // QUERY IMMAGINI
    const set1Images = containerSet1?.querySelectorAll('.set1-image');
    const set2Images = containerSet2?.querySelectorAll('.set2-image');
    const set6Images = containerSet6?.querySelectorAll('.set6-image');
    const set7Images = containerSet7?.querySelectorAll('.set7-image');
    const set8Images = containerSet8?.querySelectorAll('.set8-image');
    const set9Images = containerSet9?.querySelectorAll('.set9-image');
    const set10Images = containerSet10?.querySelectorAll('.set10-image');
    const set11Images = containerSet11?.querySelectorAll('.set11-image');
    const set12Images = containerSet12?.querySelectorAll('.set12-image');
    const set13Images = containerSet13?.querySelectorAll('.set13-image');
    const set14Images = containerSet14?.querySelectorAll('.set14-image');
    
    //BOTTONI PROGETTO
    const bottoneA = document.querySelector("button[onclick*='set1']");
    const bottoneB = document.querySelector("button[onclick*='set2']");
    const bottoneC = document.querySelector("button[onclick*='set3']");
    const bottoneD = document.querySelector("button[onclick*='set4']");
    const bottoneE = document.querySelector("button[onclick*='set5']");
    // Bottoni fuori viewport
    const bottone6 = document.querySelector("button[onclick*='set6']");
    const bottone7 = document.querySelector("button[onclick*='set7']");
    const bottone8 = document.querySelector("button[onclick*='set8']");
    const bottone9 = document.querySelector("button[onclick*='set9']");
    const bottone10 = document.querySelector("button[onclick*='set10']");
    const bottone11 = document.querySelector("button[onclick*='set11']");
    const bottone12 = document.querySelector("button[onclick*='set12']");
    const bottone13 = document.querySelector("button[onclick*='set13']");
    const bottone14 = document.querySelector("button[onclick*='set14']");
    
    const testoContenuto = document.getElementById('testo-contenuto');
    const titolo = document.getElementById('titolo-h1');

    const defaultImg = 'immagini/base/wp5404034-59414419.png';
    const hoverDefault = 'immagini/base/0031_31A.jpg';

    if (testoContenuto) testoContenuto.innerHTML = testoContenuto.dataset.default;
    if (titolo) titolo.textContent = 'Who I am';

    // ================= KEYBOARD NAVIGATION SETUP =================
    document.addEventListener('keydown', handleKeyboardNavigation);

    // Rimuovi l'highlight quando si clicca con il mouse
    document.addEventListener('click', (event) => {
        if (event.target.matches('.back-button, .link-button')) {
            currentButtonIndex = -1;
            updateButtonHighlight();
        }
    });

    // Carico immagini JSON
    caricaImmaginiJSON(() => console.log("Immagini JSON caricate:", immaginiJSON.length));

    // ================= PRELOAD =================
    const preloadImages = {};
    function preloadImage(src) {
        if (!preloadImages[src]) {
            const img = new Image();
            img.src = src;
            preloadImages[src] = img;
        }
        return preloadImages[src];
    }
    preloadImage('immagini/set/placeholder_hysterische.jpg'); // <-- AGGIUNGI QUESTA
    preloadImage(hoverDefault);
    [   
        //NWA
        'immagini/alta/NWA/NEWMEDIART_alta.jpg',
        'immagini/alta/NWA/NEWMEDIART_alta2.jpg',
        'immagini/alta/NWA/NEWMEDIART_alta3.jpg',
        'immagini/alta/NWA/NEWMEDIART_alta4.jpg',
        'immagini/alta/NWA/NEWMEDIART_alta5.jpg',
        'immagini/alta/NWA/NEWMEDIART_alta6.jpg',

        //CLUSTER
        'immagini/alta/CLUSTER/CLUSTER_alta.jpg',
        'immagini/alta/CLUSTER/CLUSTER_alta2.jpg',

        //OCLICK
        'immagini/alta/OCLICK/OCLICK_alta.jpg',
        'immagini/alta/OCLICK/OCLICK_alta2.jpg',
        'immagini/alta/OCLICK/OCLICK_alta3.jpg',
        'immagini/alta/OCLICK/OCLICK_alta4.jpg',
        'immagini/alta/OCLICK/OCLICK_alta5.jpg',
        'immagini/alta/OCLICK/OCLICK_alta6.jpg',

        //PZA
        'immagini/alta/PZA/PZA_alta.jpg',
        'immagini/alta/PZA/PZA_alta2.jpg',
        'immagini/alta/PZA/PZA_alta3.jpg',
        'immagini/alta/PZA/PZA_alta4.jpg',
        'immagini/alta/PZA/PZA_alta5.jpg',
        'immagini/alta/PZA/PZA_alta6.jpg',
        'immagini/alta/PZA/PZA_alta7.jpg',
        'immagini/alta/PZA/PZA_alta8.jpg',
        'immagini/alta/PZA/PZA_alta9.jpg',

        //ATEMPO
        'immagini/alta/ATEMPO/ATEMPO_alta.jpg',
        'immagini/alta/ATEMPO/ATEMPO_alta2.jpg',
        'immagini/alta/ATEMPO/ATEMPO_alta3.jpg',
        'immagini/alta/ATEMPO/ATEMPO_alta4.jpg',
        'immagini/alta/ATEMPO/ATEMPO_alta5.jpg',
        'immagini/alta/ATEMPO/ATEMPO_alta6.jpg',
        'immagini/alta/ATEMPO/ATEMPO_alta7.jpg',
        //'immagini/alta/ATEMPO_alta8.jpg',
        'immagini/alta/ATEMPO/ATEMPO_alta9.jpg',

        //MLU
        'immagini/alta/MLU/MLU_alta.jpg',
        //'immagini/alta/MLU_alta2.jpg',
        //'immagini/alta/MLU_alta3.jpg',

        //ORLANDO
        'immagini/alta/ORLANDO/ORLANDO_alta.jpg',
        'immagini/alta/ORLANDO/ORLANDO_alta2.jpg',
        'immagini/alta/ORLANDO/ORLANDO_alta3.jpg',
        'immagini/alta/ORLANDO/ORLANDO_alta4.jpg',
        'immagini/alta/ORLANDO/ORLANDO_alta5.jpg',
        'immagini/alta/ORLANDO/ORLANDO_alta6.jpg',
        //'immagini/alta/ORLANDO/ORLANDO_alta7.jpg',
        //'immagini/alta/ORLANDO/ORLANDO_alta8.jpg',

        //ARCAICO
        'immagini/alta/ARCAICO/ARCAICO_alta.jpg',
        'immagini/alta/ARCAICO/ARCAICO_alta2.jpg',
        'immagini/alta/ARCAICO/ARCAICO_alta3.jpg',
        'immagini/alta/ARCAICO/ARCAICO_alta4.jpg',
        'immagini/alta/ARCAICO/ARCAICO_alta5.jpg',
        'immagini/alta/ARCAICO/ARCAICO_alta6.jpg',
        'immagini/alta/ARCAICO/ARCAICO_alta7.jpg',

        //AKOH
        //'immagini/alta/AKOH/AKOH_alta.jpg',
        'immagini/alta/AKOH/AKOH_alta2.jpg',
        'immagini/alta/AKOH/AKOH_alta3.jpg',
        'immagini/alta/AKOH/AKOH_alta4.jpg',
        'immagini/alta/AKOH/AKOH_alta5.jpg',
        'immagini/alta/AKOH/AKOH_alta6.jpg',
        'immagini/alta/AKOH/AKOH_alta7.jpg',
        'immagini/alta/AKOH/AKOH_alta8.jpg',
        'immagini/alta/AKOH/AKOH_alta9.jpg',

        //VIVIDA
        'immagini/alta/VIVIDA/VIVIDA_alta.jpg',

        //TNF
        //nessuna perchè uso gif

    ].forEach(preloadImage);

    // Precarica video DOPO che il DOM è pronto
    preloadVideo('CLUSTER', 'immagini/alta/CLUSTER/CLUSTER.mp4');
    preloadVideo('AKOH', 'immagini/alta/AKOH/AKOH.mp4');
    preloadVideo('TNF', 'immagini/alta/TNF/TNF.mp4');
    preloadVideo('TNF2', 'immagini/alta/TNF/TNF2.mp4');
    preloadVideo('TNF3', 'immagini/alta/TNF/TNF3.mp4');
    preloadVideo('TNF4', 'immagini/alta/TNF/TNF4.mp4');
    preloadVideo('TNF5', 'immagini/alta/TNF/TNF5.mp4');
    preloadVideo('TNF6', 'immagini/alta/TNF/TNF6.mp4');
    preloadVideo('TNF7', 'immagini/alta/TNF/TNF7.mp4');
    preloadVideo('TNF8', 'immagini/alta/TNF/TNF8.mp4');
    
    // ================= RESIZE HELPER =================
    function resizeImageToFillViewport(img, targetSrc) {
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        const pre = preloadImages[targetSrc] || preloadImage(targetSrc);

        if (pre.naturalHeight && pre.naturalWidth) {
            const arImg = pre.naturalWidth / pre.naturalHeight;
            const arView = vw / vh;
            let w, h;
            if (arImg > arView) { h = vh; w = h * arImg; }
            else { w = vw; h = w / arImg; }
            img.style.width = w + 'px';
            img.style.height = h + 'px';
            img.style.left = '50%';
            img.style.top = '50%';
            img.style.transform = 'translate(-50%, -50%)';
            img.style.position = 'fixed';
            img.style.objectFit = 'cover';
        } else {
            pre.onload = () => resizeImageToFillViewport(img, targetSrc);
        }
    }
    window.addEventListener('resize', () => {
        if (imgHover && imgHover.classList.contains('fullscreen')) {
            resizeImageToFillViewport(imgHover, imgHover.src);
        }
        if (containerSet1 && !containerSet1.classList.contains('hidden')) randomizeImagePositions(containerSet1);
        if (containerSet2 && !containerSet2.classList.contains('hidden')) randomizeImagePositions(containerSet2);
        if (containerSet6 && !containerSet6.classList.contains('hidden')) randomizeImagePositions(containerSet6);
        if (containerSet7 && !containerSet7.classList.contains('hidden')) randomizeImagePositions(containerSet7);
        if (containerSet8 && !containerSet8.classList.contains('hidden')) randomizeImagePositions(containerSet8);
        if (containerSet9 && !containerSet9.classList.contains('hidden')) randomizeImagePositions(containerSet9);
        if (containerSet10 && !containerSet10.classList.contains('hidden')) randomizeImagePositions(containerSet10);
        if (containerSet11 && !containerSet11.classList.contains('hidden')) randomizeImagePositions(containerSet11);
        if (containerSet12 && !containerSet12.classList.contains('hidden')) randomizeImagePositions(containerSet12);
        if (containerSet13 && !containerSet13.classList.contains('hidden')) randomizeImagePositions(containerSet13);
        if (containerSet14 && !containerSet14.classList.contains('hidden')) randomizeImagePositions(containerSet14);
    });

   
    // Hover Set1
    if (set1Images) {
        set1Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set1Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("CLUSTER_bassa.jpg")) showHoverImage('immagini/alta/CLUSTER/CLUSTER_alta.jpg');
                else if (img.src.includes("CLUSTER_bassa2.jpg")) showHoverImage('immagini/alta/CLUSTER/CLUSTER_alta2.jpg');
                else if (img.src.includes("CLUSTER_bassa3.gif")) showHoverVideo('CLUSTER');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set1Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

    // Hover Set2
    if (set2Images) {
        set2Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set2Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("NEWMEDIART_bassa.jpg")) showHoverImage('immagini/alta/NWA/NEWMEDIART_alta.jpg');
                else if (img.src.includes("NEWMEDIART_bassa2.jpg")) showHoverImage('immagini/alta/NWA/NEWMEDIART_alta2.jpg');
                else if (img.src.includes("NEWMEDIART_bassa3.jpg")) showHoverImage('immagini/alta/NWA/NEWMEDIART_alta3.jpg');
                else if (img.src.includes("NEWMEDIART_bassa4.jpg")) showHoverImage('immagini/alta/NWA/NEWMEDIART_alta4.jpg');
                else if (img.src.includes("NEWMEDIART_bassa5.jpg")) showHoverImage('immagini/alta/NWA/NEWMEDIART_alta5.jpg');
                else if (img.src.includes("NEWMEDIART_bassa6.jpg")) showHoverImage('immagini/alta/NWA/NEWMEDIART_alta6.jpg');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set2Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverImage();
            });
        });
    }

    // Hover Set6 (Pesaro Zona Acustica)
    if (set6Images) {
        set6Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set6Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("PZA_bassa.jpg")) showHoverImage('immagini/alta/PZA/PZA_alta.jpg');
                else if (img.src.includes("PZA_bassa2.jpg")) showHoverImage('immagini/alta/PZA/PZA_alta2.jpg');
                else if (img.src.includes("PZA_bassa3.jpg")) showHoverImage('immagini/alta/PZA/PZA_alta3.jpg');
                else if (img.src.includes("PZA_bassa4.jpg")) showHoverImage('immagini/alta/PZA/PZA_alta4.jpg');
                else if (img.src.includes("PZA_bassa5.jpg")) showHoverImage('immagini/alta/PZA/PZA_alta5.jpg');
                else if (img.src.includes("PZA_bassa6.jpg")) showHoverImage('immagini/alta/PZA/PZA_alta6.jpg');
                else if (img.src.includes("PZA_bassa7.jpg")) showHoverImage('immagini/alta/PZA/PZA_alta7.jpg');
                else if (img.src.includes("PZA_bassa8.jpg")) showHoverImage('immagini/alta/PZA/PZA_alta8.jpg');
                else if (img.src.includes("PZA_bassa9.jpg")) showHoverImage('immagini/alta/PZA/PZA_alta9.jpg');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set6Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

    // Hover Set7 (TNF)
    if (set7Images) {
        set7Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set7Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("TNF_bassa.gif")) showHoverVideo('TNF');
                if (img.src.includes("TNF_bassa2.gif")) showHoverVideo('TNF2');
                if (img.src.includes("TNF_bassa3.gif")) showHoverVideo('TNF3');
                if (img.src.includes("TNF_bassa4.gif")) showHoverVideo('TNF4');
                if (img.src.includes("TNF_bassa5.gif")) showHoverVideo('TNF5');
                if (img.src.includes("TNF_bassa6.gif")) showHoverVideo('TNF6');
                if (img.src.includes("TNF_bassa7.gif")) showHoverVideo('TNF7');
                if (img.src.includes("TNF_bassa8.gif")) showHoverVideo('TNF8');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set7Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

    // Hover Set8 (O Family)
    if (set8Images) {
        set8Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set8Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("OCLICK_bassa.jpg")) showHoverImage('immagini/alta/OCLICK/OCLICK_alta.jpg');
                else if (img.src.includes("OCLICK_bassa2.jpg")) showHoverImage('immagini/alta/OCLICK/OCLICK_alta2.jpg');
                else if (img.src.includes("OCLICK_bassa3.jpg")) showHoverImage('immagini/alta/OCLICK/OCLICK_alta3.jpg');
                else if (img.src.includes("OCLICK_bassa4.jpg")) showHoverImage('immagini/alta/OCLICK/OCLICK_alta4.jpg');
                else if (img.src.includes("OCLICK_bassa5.jpg")) showHoverImage('immagini/alta/OCLICK/OCLICK_alta5.jpg');
                else if (img.src.includes("OCLICK_bassa6.jpg")) showHoverImage('immagini/alta/OCLICK/OCLICK_alta6.jpg');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set8Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

    // Hover Set9 (A KIND OF HUMANITY)
    if (set9Images) {
        set9Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set9Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("AKOH_bassa.gif")) showHoverVideo('AKOH');
                else if (img.src.includes("AKOH_bassa2.jpg")) showHoverImage('immagini/alta/AKOH/AKOH_alta2.jpg');
                else if (img.src.includes("AKOH_bassa3.jpg")) showHoverImage('immagini/alta/AKOH/AKOH_alta3.jpg');
                else if (img.src.includes("AKOH_bassa4.jpg")) showHoverImage('immagini/alta/AKOH/AKOH_alta4.jpg');
                else if (img.src.includes("AKOH_bassa5.jpg")) showHoverImage('immagini/alta/AKOH/AKOH_alta5.jpg');
                else if (img.src.includes("AKOH_bassa6.jpg")) showHoverImage('immagini/alta/AKOH/AKOH_alta6.jpg');
                else if (img.src.includes("AKOH_bassa7.jpg")) showHoverImage('immagini/alta/AKOH/AKOH_alta7.jpg');
                else if (img.src.includes("AKOH_bassa8.jpg")) showHoverImage('immagini/alta/AKOH/AKOH_alta8.jpg');
                else if (img.src.includes("AKOH_bassa9.jpg")) showHoverImage('immagini/alta/AKOH/AKOH_alta9.jpg');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set9Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

    // Hover Set10 (A-Tempo)
    if (set10Images) {
        set10Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set10Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("ATEMPO_bassa.jpg")) showHoverImage('immagini/alta/ATEMPO/ATEMPO_alta.jpg');
                else if (img.src.includes("ATEMPO_bassa2.jpg")) showHoverImage('immagini/alta/ATEMPO/ATEMPO_alta2.jpg');
                else if (img.src.includes("ATEMPO_bassa3.jpg")) showHoverImage('immagini/alta/ATEMPO/ATEMPO_alta3.jpg');
                else if (img.src.includes("ATEMPO_bassa4.jpg")) showHoverImage('immagini/alta/ATEMPO/ATEMPO_alta4.jpg');
                else if (img.src.includes("ATEMPO_bassa5.jpg")) showHoverImage('immagini/alta/ATEMPO/ATEMPO_alta5.jpg');
                else if (img.src.includes("ATEMPO_bassa6.jpg")) showHoverImage('immagini/alta/ATEMPO/ATEMPO_alta6.jpg');
                else if (img.src.includes("ATEMPO_bassa7.jpg")) showHoverImage('immagini/alta/ATEMPO/ATEMPO_alta7.jpg');
                //else if (img.src.includes("ATEMPO_bassa8.jpg")) showHoverImage('immagini/alta/ATEMPO/ATEMPO_alta8.jpg');
                else if (img.src.includes("ATEMPO_bassa9.jpg")) showHoverImage('immagini/alta/ATEMPO/ATEMPO_alta9.jpg');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set10Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

    // Hover Set11 (ARCACO)
    if (set11Images) {
        set11Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set11Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("ARCAICO_bassa.jpg")) showHoverImage('immagini/alta/ARCAICO/ARCAICO_alta.jpg');
                else if (img.src.includes("ARCAICO_bassa2.jpg")) showHoverImage('immagini/alta/ARCAICO/ARCAICO_alta2.jpg');
                else if (img.src.includes("ARCAICO_bassa3.jpg")) showHoverImage('immagini/alta/ARCAICO/ARCAICO_alta3.jpg');
                else if (img.src.includes("ARCAICO_bassa4.jpg")) showHoverImage('immagini/alta/ARCAICO/ARCAICO_alta4.jpg');
                else if (img.src.includes("ARCAICO_bassa5.jpg")) showHoverImage('immagini/alta/ARCAICO/ARCAICO_alta5.jpg');
                else if (img.src.includes("ARCAICO_bassa6.jpg")) showHoverImage('immagini/alta/ARCAICO/ARCAICO_alta6.jpg');
                else if (img.src.includes("ARCAICO_bassa7.jpg")) showHoverImage('immagini/alta/ARCAICO/ARCAICO_alta7.jpg');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set11Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

// Hover Set12 (MLU)
    if (set12Images) {
        set12Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set12Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("MLU_bassa.jpg")) showHoverImage('immagini/alta/MLU/MLU_alta.jpg');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set12Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

    // Hover Set13 (ORLANDO)
    if (set13Images) {
        set13Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set13Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("ORLANDO_bassa.gif")) showHoverImage('immagini/alta/ORLANDO/ORLANDO_alta.jpg');
                else if (img.src.includes("ORLANDO_bassa2.gif")) showHoverImage('immagini/alta/ORLANDO/ORLANDO_alta2.jpg');
                else if (img.src.includes("ORLANDO_bassa3.gif")) showHoverImage('immagini/alta/ORLANDO/ORLANDO_alta3.jpg');
                else if (img.src.includes("ORLANDO_bassa4.jpg")) showHoverImage('immagini/alta/ORLANDO/ORLANDO_alta4.jpg');
                else if (img.src.includes("ORLANDO_bassa5.jpg")) showHoverImage('immagini/alta/ORLANDO/ORLANDO_alta5.jpg');
                else if (img.src.includes("ORLANDO_bassa6.jpg")) showHoverImage('immagini/alta/ORLANDO/ORLANDO_alta6.jpg');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set13Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

    // Hover Set14 (VIVIDA)
    if (set14Images) {
        set14Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set14Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("VIVIDA_bassa.jpg")) showHoverImage('immagini/alta/VIVIDA/VIVIDA_alta.jpg');
                
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set14Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

    // Hover immagine principale
if (imgMain) {
    imgMain.addEventListener('mouseover', () => {
        const isA = bottoneA?.classList.contains('selected');
        const isB = bottoneB?.classList.contains('selected');
        const isC = bottoneC?.classList.contains('selected');
        
        // Solo se NESSUN bottone è selezionato, mostra l'hover default
        if (!isA && !isB && !isC) {
            disableScroll();
            imgMain.src = hoverDefault;
            if (imgHover) imgHover.classList.add('hidden');
        }
        // Se uno dei bottoni è selezionato, l'immagine è già nascosta
        // quindi questo evento non dovrebbe mai verificarsi
    });
    
    imgMain.addEventListener('mouseout', () => {
        const isA = bottoneA?.classList.contains('selected');
        const isB = bottoneB?.classList.contains('selected');
        const isC = bottoneC?.classList.contains('selected');
        
        enableScroll();
        
        // Solo se NESSUN bottone è selezionato, ripristina l'immagine default
        if (!isA && !isB && !isC) {
            imgMain.src = defaultImg;
        }
        
        hideHoverImage();
    });
}
});

// ================== CAMBIA CONTENUTO ==================
function cambiaContenuto(set) {
    const imgMain = document.getElementById('Immagine_Centrata');
    const imgHover = document.getElementById('Immagine_Sottostante');
    const containerSet1 = document.querySelector('.container-set1');
    const containerSet2 = document.querySelector('.container-set2');
    const containerSet3 = document.querySelector('.container-set3');
    const containerSet4 = document.querySelector('.container-set4');
    const containerSet5 = document.querySelector('.container-set5');
    // CONTAINER NASCOSTI
    const containerSet6 = document.querySelector('.container-set6');
    const containerSet7 = document.querySelector('.container-set7');
    const containerSet8 = document.querySelector('.container-set8');
    const containerSet9 = document.querySelector('.container-set9');
    const containerSet10 = document.querySelector('.container-set10');
    const containerSet11 = document.querySelector('.container-set11');
    const containerSet12 = document.querySelector('.container-set12');
    const containerSet13 = document.querySelector('.container-set13');
    const containerSet14 = document.querySelector('.container-set14');

    const titolo = document.getElementById('titolo-h1');
    const testoContenuto = document.getElementById('testo-contenuto');
    const bottoneA = document.querySelector("button[onclick*='set1']");
    const bottoneB = document.querySelector("button[onclick*='set2']");
    const bottoneC = document.querySelector("button[onclick*='set3']");
    const bottoneD = document.querySelector("button[onclick*='set4']");
    const bottoneE = document.querySelector("button[onclick*='set5']");
    // BOTTONO NASCOSTI
    const bottone6 = document.querySelector("button[onclick*='set6']");
    const bottone7 = document.querySelector("button[onclick*='set7']");
    const bottone8 = document.querySelector("button[onclick*='set8']");
    const bottone9 = document.querySelector("button[onclick*='set9']");
    const bottone10 = document.querySelector("button[onclick*='set10']");
    const bottone11 = document.querySelector("button[onclick*='set11']");
    const bottone12 = document.querySelector("button[onclick*='set12']");
    const bottone13 = document.querySelector("button[onclick*='set13']");
    const bottone14 = document.querySelector("button[onclick*='set14']");

    const defaultImg = 'immagini/base/wp5404034-59414419.png';
    const defaultTitolo = 'Chi sono';
    const defaultTesto = testoContenuto ? testoContenuto.dataset.default : '';

    // TESTI SET
    const testoSet1 = `<p>
        Cluter is an interactive installation that evokes the imagery of the cosmos and galaxies. 
        The project features countless luminous particles reacting to user movements. 
        By moving your hands, you can control gravity and shape the forces of the surrounding space.
        The project was developed during a TouchDesigner workshop with Laura Arcangeli from Studio 
        <a href="https://ultraviolet.to/" target="_blank" class="inline-link">Ultravioletto</a>.
        <div class="button-row">`;

    const testoSet2 = `<p>
        The thesis was further developed in collaboration with
        <a href="https://www.ulissegallery.com/index.html" target="_blank" class="inline-link">Ulisse Gallery Contemporary Art</a>
         in Rome, a 350 m² exhibition space near Piazza di Spagna. 
         The gallery has worked with major international artists, including Maestro Ugo Attardi, whose Historical Archive it holds. 
        The project was selected during the festival among the 100 innovative works at NEOLOGIA, Graphic Days 2023 in Turin.
        <br /><br /><a href="https://www.graphicdays.it/neologia/new-media-art-come-il-computer-ha-rivoluzionato-il-mondo-sirio-procacci/()" target="_blank" class="inline-button">VIEW PROJECT</button>
        <div class="button-row"> `;

    const testoSet3 = `<p> 
        [8583 Hysterische Postkarten] is a project based on the Austrian archive 
        <a href="https://labs.onb.ac.at/en/datasets/akon/" target="_blank" class="inline-link">Historical Postcards</a>.
        It draws inspiration from Bruno Munari’s "Saluti e Baci" series.
        Here you can create unique and surreal collages.
        <br /><br />- Enter a value from 1 to 100;
        <br />- Use the "GENERATE" button or the "ENTER" key;
        <br />- Use the mouse to view the information;
        <br />- Click on the portion you want to view.
        <br />
        <div class="button-row">
        <button onclick="redirectToHysterischePage()" class="inline-button">VIEW PROJECT</button>`;

    const testoSet4 = `<p>
        This project takes inspiration from the classic “10 PRINT” code to explore randomness, creativity, and digital complexity. 
        By turning videos into visual patterns, it investigates new forms of representation that make content harder to identify or censor.
        The app only supports .mp4 video so please don't be an a**hole!
        <br />If you've been a good boy, now you can play with colors and patterns! Who's my good boy?
        <br />
        <div class="button-row">
            <button onclick="redirectToPrintPage()" class="inline-button">VIEW PROJECT</button>
            <button onclick="redirectTo10PPGitPage()" class="inline-button">MORE INFO</button>`;

    const testoSet5 = `<p>
        An interactive application designed to develop 
        <a href="https://www.circolodeldesign.it/" target="_blank" class="inline-link">Circolo del Design</a>'s
        video identity. It lets users interact in real time with a 3D model of the CDD logo.
        Developed under the art direction of
        <a href="https://www.studiograndhotel.it/" target="_blank" class="inline-link">Studio Grand Hotel</a>.
        </p>
        <div class="button-row">
            <button onclick="redirectToCDDPage()" class="inline-button">VIEW PROJECT</button>
            <button onclick="redirectToCDDVideo()" class="inline-button">VIEW VIDEO</button>`;

    const testoSet6 = `<p>
        Pesaro makes a sound and it’s urban. 
        Its rhythm shifts with space and time, from the industrial outskirts to the coast where architecture meets the Adriatic.
        Nature weaves through the city’s forms, blending culture and environment into a sound that can be mapped and explored.
        “0721” is an exhibition project developed with the 
        <a href="https://www.comune.pesaro.pu.it/turismo/dettaglio/news/storie-e-geografie/?tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=fd8ba27f281f902ae5092e4a562d5607" target="_blank" class="inline-link">Municipality of Pesaro</a> 
        and 
        <a href="https://pesaromusei.it/guide/nbart-opere-di-gio-ross-2-3-2-2-2-2/" target="_blank" class="inline-link">Pesaro Musei</a>
        for "Pesaro Italian Capital of Culture 2024" featuring both urban and indoor installations at 
        <a href="https://pesaromusei.it/pescheria-centro-arti-visive/" target="_blank" class="inline-link">Pescheria Centro Arti Visive</a>.
        <div class="button-row">`;

    const testoSet7 = `<p>
        “Can AI Unlock Your Creativity?” was a workshop on Artificial Intelligence led by 
        <a href="https://monogrid.com/en" target="_blank" class="inline-link">MONOGRID</a>'s 
        Art Director and Creative Technologist.
        By the end, I had grasped AI fundamentals, learned tools like Midjourney, and created a short film combining several AI systems. 
        The video was produced in a vertical format for mobile viewing as a reel for the launch of three new products designed by The North Face.
        <br />
        <div class="button-row">
            <a href="https://vimeo.com/1125189923?share=copy" target="_blank" class="inline-link">VIEW PROJECT</a>`;

    const testoSet8 = `<p>
        O’Bucket is a product-service tackling pollution caused by Expanded Polystyrene (EPS) in the seafood market. 
        It reuses the material’s air cavities for thermal insulation, while its modular design makes it easy to disassemble and reuse.
        Thanks to its vacuum return service, O’Bucket eliminates single-use waste. 
        Designed for sustainability, it will be submitted for the 2024 James Dyson Award in line with EU Directive 2019/904.
        <div class="button-row">`;

    const testoSet9 = `<p>
        "A Kind of Humanity is an interactive installation that invites silence, reflection, and introspection. 
        At its center burns a fire, a symbol of energy and collective connection, that reacts to visitors’ voices.
        Using Hume AI, the system analyzes vocal emotions and reshapes its form in response, creating a dialogue between humans and space.
        Inspired by the intimacy of the hearth, the piece reimagines communication as an emotional, ancestral experience.
        <br /></p>
        <div class="button-row">`;

    const testoSet10 = `<p>
        The project is a two-step journey leading visitors into the 
        <a href="https://www.museoiluoghidellanima.it/orto-dei-frutti-dimenticati" target="_blank" class="inline-link">Orto dei Frutti Dimenticati</a> 
        in Pennabilli (RN). Each stage offers sensory experiences that evoke Tonino Guerra’s poetic vision of the past.
        Through research and design, a pre-visit path was created to help visitors fully immerse themselves in the museum’s atmosphere.
        <div class="button-row">`;

    const testoSet11 = `<p>
       This short film explores the soul of Eduardo Souto De Moura’s Vatican Chapel for the Distributed 
        <a href="https://www.cini.it/eventi/vatican-chapels-padiglione-della-santa-sede-alla-16-mostra-internazionale-di-architettura/" target="_blank" class="inline-link">Pavilion of the Holy See</a>
        at the 16th Venice Architecture Biennale. 
        The film reflects on materiality, geometry, and time, recurring themes in De Moura’s work, to reveal an aesthetic suspended between the sacred and the ancient.
        <div class="button-row">
        <a href="https://vimeo.com/1025145739" target="_blank" class="inline-button">VIEW PROJECT</button>`; 
        
    const testoSet12 = `<p>
        The project involved designing and displaying three large posters on the main facade of Turin’s Alberto Geisser, Natalia Ginzburg, and Dietrich Bonhoeffer libraries.
        The exhibition     
        <a href="https://www.museoantropologia.unito.it/museo-in-libera-uscita/" target="_blank" class="inline-link">Museo in Libera Uscita</a>
        was realized under the art direction of 
        <a href="https://www.studiograndhotel.it/" target="_blank" class="inline-link">Studio Grand Hotel</a>.
        <br /></p>
        <div class="button-row">`; 

    const testoSet13 = `<p>
        Chasing Orlando is a theatrical comedy inspired by Ludovico Ariosto’s Orlando Furioso, staged at La Fenice Theatre in Senigallia (June 2024).
        The project focused on creating live interactive 3D scenography in the browser using three.js and cannon.js.
        Developed in the Digital Experience Lab led by Daniele Tabellini, each group designed visuals to accompany text and performance.
        My team built dynamic landsaoe such as the forest of spears that shifted throughout the show.
        The software was released open source on GitHub.
        <div class="button-row">
            <a href="https://github.com/del-2024-unirsm/three-sessions-2024-senigallia" target="_blank" class="inline-button">DOCUMENTATION</button>
            <a href="https://github.com/del-2024-unirsm/three-sessions-2024-senigallia/wiki/2.-Paesaggi" target="_blank" class="inline-button">MORE INFO</button>`;

    const testoSet14 = `<p>
        Vivida is a startup concept that designs data visualization systems, merging data power with visual aesthetics to create interactive, real-time experiences. Its goal is to make data more human — accessible, emotional, and culturally relevant.
        ENSI, one of Vivida’s prototypes, visualizes NASA’s meteorite data from the 9th century to today through an interactive globe with filters for location, mass, time, and mode, turning data into an immersive experience.
        </p>
        <div class="button-row">
            <a href="https://vimeo.com/1125186622?share=copy" target="_blank" class="inline-button">VIEW PROJECT</button>`;
    
    //GESTIONE SET
    // Gestione set1 (Cluster)
    if (set === 'set1') {
        if (bottoneA?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (containerSet1) {
                containerSet1.classList.remove('hidden');
                randomizeImagePositions(containerSet1);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = 'Cluster';
            if (testoContenuto) testoContenuto.innerHTML = testoSet1;
            if (bottoneA) bottoneA.classList.add('selected');
            aggiornaKeywords(['2024','Interaction','Experience Design','Motion Capture']);
        }
    }

    // Gestione set2 (New Media Art)
    if (set === 'set2') {
        if (bottoneB?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (containerSet2) {
                containerSet2.classList.remove('hidden');
                randomizeImagePositions(containerSet2);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = 'New Media Art';
            if (testoContenuto) testoContenuto.innerHTML = testoSet2;
            if (bottoneB) bottoneB.classList.add('selected');
            aggiornaKeywords(['2022','Bachelor Project', 'Editorial','Archive Research']);
        }
    }

    // Gestione set3 (Hysterische Postkarten)
    if (set === 'set3') {
        if (bottoneC?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (containerSet3) containerSet3.classList.remove('hidden');
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = '[8583 Hysterische Postkarten]';
            if (testoContenuto) testoContenuto.innerHTML = testoSet3;
            if (bottoneC) bottoneC.classList.add('selected');
            avviaRotazioneImmaginiSet3();
            aggiornaKeywords(['2024','Interaction','Data Visualization','Creative Coding']);
        }
    }

    // Gestione set4 (10 Punk Print)
    if (set === 'set4') {
        if (bottoneD?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (containerSet4) containerSet4.classList.remove('hidden');
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = '\\m/ 10 PUNK PRINT \\m/';
            if (testoContenuto) testoContenuto.innerHTML = testoSet4;
            if (bottoneD) bottoneD.classList.add('selected');
            aggiornaKeywords(['2024','Interaction','Creative Coding','Digital Research']);
        }
    }

    // Gestione set5 (Circolo del Design)
    if (set === 'set5') {
        if (bottoneE?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (containerSet5) {
                containerSet5.classList.remove('hidden');
                randomizeImagePositions(containerSet5);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = 'Circolo Del Design';
            if (testoContenuto) testoContenuto.innerHTML = testoSet5;
            if (bottoneE) bottoneE.classList.add('selected');
            aggiornaKeywords(['2024','Visual Identity','Creative Coding','Video Editing']);
        }
    }

    // Gestione set6 (Nome Progetto)
    if (set === 'set6') {
        if (bottone6?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (containerSet6) {
                containerSet6.classList.remove('hidden');
                randomizeImagePositions(containerSet6);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = '0721 Pesaro Zona Acustica';
            if (testoContenuto) testoContenuto.innerHTML = testoSet6;
            if (bottone6) bottone6.classList.add('selected');
            aggiornaKeywords(['2023','Exhibition','Sound Design','Arduino']);
        }
    }

    // Gestione set7 (Nome Progetto)
    if (set === 'set7') {
        if (bottone7?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (containerSet7) {
                containerSet7.classList.remove('hidden');
                randomizeImagePositions(containerSet7);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = 'The North Face';
            if (testoContenuto) testoContenuto.innerHTML = testoSet7;
            if (bottone7) bottone7.classList.add('selected');
            aggiornaKeywords(['2023','AI','Video Editing','Tehcnologic Research']);
        }
    }

    // Gestione set8 (O Family)
    if (set === 'set8') {
        if (bottone8?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (containerSet8) {
                containerSet8.classList.remove('hidden');
                randomizeImagePositions(containerSet8);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = 'O`Family';
            if (testoContenuto) testoContenuto.innerHTML = testoSet8;
            if (bottone8) bottone8.classList.add('selected');
            aggiornaKeywords(['2022','Product','Sustainable Design','3D Modelling']);
        }
    }

    // Gestione set9 (Nome Progetto)
    if (set === 'set9') {
        if (bottone9?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (containerSet9) {
                containerSet9.classList.remove('hidden');
                randomizeImagePositions(containerSet9);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = 'A KIND OF HUMANITY';
            if (testoContenuto) testoContenuto.innerHTML = testoSet9;
            if (bottone9) bottone9.classList.add('selected');
            aggiornaKeywords(['2025','Exhibition','AI','Visual Design']);
        }
    }

    // Gestione set10 (Nome Progetto)
    if (set === 'set10') {
        if (bottone10?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (containerSet10) {
                containerSet10.classList.remove('hidden');
                randomizeImagePositions(containerSet10);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = 'A-Tempo';
            if (testoContenuto) testoContenuto.innerHTML = testoSet10;
            if (bottone10) bottone10.classList.add('selected');
            aggiornaKeywords(['2023','Interaction','3D Modelling','Arduino']);
        }
    }

    // Gestione set11 (Nome Progetto)
    if (set === 'set11') {
        if (bottone11?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (containerSet11) {
                containerSet11.classList.remove('hidden');
                randomizeImagePositions(containerSet11);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = 'ARCAICO';
            if (testoContenuto) testoContenuto.innerHTML = testoSet11;
            if (bottone11) bottone11.classList.add('selected');
            aggiornaKeywords(['2024','Art Direction','Video Editing','Sound Design']);
        }
    }

    // Gestione set12 (MLU)
    if (set === 'set12') {
        if (bottone12?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (containerSet12) {
                containerSet12.classList.remove('hidden');
                randomizeImagePositions(containerSet12);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = 'Museo in Libera Uscita';
            if (testoContenuto) testoContenuto.innerHTML = testoSet12;
            if (bottone12) bottone12.classList.add('selected');
            aggiornaKeywords(['2025','Manifesto','Art Direction','Graphic Design']);
        }
    }

    // Gestione set13 (Inseguendo Orlando)
    if (set === 'set13') {
        if (bottone13?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (containerSet13) {
                containerSet13.classList.remove('hidden');
                randomizeImagePositions(containerSet13);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = 'Inseguendo Orlando'; 
            if (testoContenuto) testoContenuto.innerHTML = testoSet13;
            if (bottone13) bottone13.classList.add('selected');
            aggiornaKeywords(['2024','Digital Scenography','Interactive Visual','Creative Coding']);
        }
    }


// Gestione set14 (VIVIDA)
    if (set === 'set14') {
        if (bottone14?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (containerSet14) {
                containerSet14.classList.remove('hidden');
                randomizeImagePositions(containerSet14);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = 'VIVIDA'; 
            if (testoContenuto) testoContenuto.innerHTML = testoSet14;
            if (bottone14) bottone14.classList.add('selected');
            aggiornaKeywords(['2024','Interaction','Data Visualization','Web Application']);
        }
    }
}