// Blocca completamente la registrazione dei listener p5.js su deviceorientation e devicemotion
window.addEventListener = (function(origAddEventListener) {
  return function(type, listener, options) {
    if(type === 'deviceorientation' || type === 'devicemotion') {
      // Non aggiungere listener a questi eventi
      return;
    }
    origAddEventListener.call(this, type, listener, options);
  };
})(window.addEventListener);

let video;
let charSize = 10;
let patternVariant = 0;
let asciiChars = " .:-=+*#%@";
let patternColor = [255, 255, 255];
let outlineColor = [255, 255, 255];
let colorPicker, outlineColorPicker, patternSlider;
let colorSwatch, outlineSwatch;
let originalLabelText = "UPLOAD VIDEO";
let videoLoadedFlag = false;
let videoCols = 160;
let videoRows = 120;
let canvas;
let baseAspect = videoCols / videoRows;
let scaledWidth, scaledHeight;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('videoContainer');

  // Rimuovi i listener ai sensori (per eliminare i warning di orientamento e movimento)
  if (window.removeEventListener) {
    window.removeEventListener('deviceorientation', p5._onDeviceOrientation);
    window.removeEventListener('devicemotion', p5._onDeviceMotion);
  }

  frameRate(30);
  colorMode(RGB);
  textAlign(CENTER, CENTER);

  // --- COLOR PICKER PERSONALIZZATO ---
  colorPicker = select('#colorPicker');
  colorSwatch = select('#colorSwatch');
  
  // Colore iniziale per pattern color
  const initialPatternColor = colorPicker.value();
  colorSwatch.style('background-color', initialPatternColor);
  patternColor = hexToRGB(initialPatternColor);
  
  // Listener per aggiornamento colore pattern
  colorPicker.input(changePatternColor);

  // --- OUTLINE COLOR PICKER PERSONALIZZATO ---
  outlineColorPicker = select('#outlineColorPicker');
  outlineSwatch = select('#outlineSwatch');
  
  // Colore iniziale per outline color
  const initialOutlineColor = outlineColorPicker.value();
  outlineSwatch.style('background-color', initialOutlineColor);
  outlineColor = hexToRGB(initialOutlineColor);
  
  // Listener per aggiornamento outline color
  outlineColorPicker.input(changeOutlineColor);

  patternSlider = select('#patternSlider');

  document.getElementById('videoUpload').addEventListener('change', handleFile, false);
  document.getElementById('patternButton').addEventListener('click', changePattern);

  let videoUploadLabel = document.getElementById('videoUploadLabel');
  videoUploadLabel.addEventListener('mouseover', showChooseFileText);
  videoUploadLabel.addEventListener('mouseout', resetLabelText);

  window.addEventListener('resize', resizeCanvasToWindow);
  resizeCanvasToWindow();
}

function draw() {
  background(0);

  if (video && videoLoadedFlag) {
    video.loadPixels();

    let cellW = scaledWidth / videoCols;
    let cellH = scaledHeight / videoRows;

    let offsetX = (width - scaledWidth) / 2;
    let offsetY = (height - scaledHeight) / 2;

    for (let y = 0; y < videoRows; y++) {
      for (let x = 0; x < videoCols; x++) {
        let pxIndex = (x + y * videoCols) * 4;
        let r = video.pixels[pxIndex];
        let g = video.pixels[pxIndex + 1];
        let b = video.pixels[pxIndex + 2];
        let brightness = (r + g + b) / 3;

        let px = offsetX + x * cellW;
        let py = offsetY + y * cellH;

        selectPattern(px, py, min(cellW, cellH), brightness);
      }
    }
  } else {
    simulatePatternDrawing();
  }
}

function simulatePatternDrawing() {
  let scaleFactor = charSize;
  let simulatedBrightness = 127;

  let canvasRatio = width / height;
  let drawW = width;
  let drawH = height;

  if (canvasRatio > baseAspect) {
    drawW = height * baseAspect;
  } else {
    drawH = width / baseAspect;
  }

  let offsetX = (width - drawW) / 2;
  let offsetY = (height - drawH) / 2;

  for (let y = 0; y < drawH; y += scaleFactor) {
    for (let x = 0; x < drawW; x += scaleFactor) {
      selectPattern(offsetX + x, offsetY + y, scaleFactor, simulatedBrightness);
    }
  }
}

function resizeCanvasToWindow() {
  resizeCanvas(windowWidth, windowHeight);

  let winRatio = windowWidth / windowHeight;

  if (winRatio > baseAspect) {
    scaledHeight = windowHeight;
    scaledWidth = scaledHeight * baseAspect;
  } else {
    scaledWidth = windowWidth;
    scaledHeight = scaledWidth / baseAspect;
  }
}

function selectPattern(x, y, scaleFactor, brightness) {
  switch (patternVariant) {
    case 0:
      let lineWidth = map(brightness, 0, 255, 1, 2);
      stroke(patternColor);
      strokeWeight(lineWidth);
      if (brightness > patternSlider.value()) {
        stroke(outlineColor);
        line(x, y, x + scaleFactor, y + scaleFactor);
      } else {
        line(x + scaleFactor, y, x, y + scaleFactor);
      }
      break;

    case 1:
      let diameter = map(brightness, 0, 255, scaleFactor, scaleFactor * 5);
      noFill();
      stroke(patternColor);
      if (brightness > patternSlider.value()) {
        stroke(outlineColor);
        ellipse(x + scaleFactor / 2, y + scaleFactor / 2, diameter, diameter);
      } else {
        ellipse(x + scaleFactor / 2, y + scaleFactor / 2, diameter / 2, diameter / 2);
      }
      break;

    case 2:
      let rectSize = map(brightness, 0, 255, scaleFactor / 2, scaleFactor * 2);
      if (brightness > patternSlider.value()) {
        fill(outlineColor);
        stroke(patternColor);
      } else {
        noFill();
        stroke(patternColor);
      }
      rect(x, y, rectSize, rectSize);
      break;

    case 3:
      let asciiIndex = floor(map(brightness, 0, 255, 0, asciiChars.length));
      let asciiChar = asciiChars.charAt(asciiIndex);
      let charCount = map(patternSlider.value(), 0, 230, 1, 2.5);
      textSize(scaleFactor * charCount);
      textFont('monospace');
      if (brightness > patternSlider.value()) {
        fill(outlineColor);
        stroke(patternColor);
      } else {
        noFill();
        stroke(patternColor);
      }
      text(asciiChar, x + scaleFactor / 2, y + scaleFactor / 2);
      break;

    case 4:
      let lineWidth2 = map(brightness, 0, 255, 15, 25);
      stroke(patternColor);
      strokeWeight(lineWidth2);
      if (brightness > patternSlider.value()) {
        stroke(outlineColor);
        line(x, y, x + scaleFactor, y + scaleFactor);
      } else {
        line(x + scaleFactor, y, x, y);
      }
      break;

    default:
      let defaultLineWidth = map(brightness, 0, 255, 1, 2);
      stroke(patternColor);
      strokeWeight(defaultLineWidth);
      if (brightness > patternSlider.value()) {
        stroke(outlineColor);
        line(x, y, x + scaleFactor, y + scaleFactor);
      } else {
        line(x + scaleFactor, y, x, y);
      }
  }
}

function changePatternColor() {
  const color = colorPicker.value();
  colorSwatch.style('background-color', color);
  patternColor = hexToRGB(color);
}

function changeOutlineColor() {
  const color = outlineColorPicker.value();
  outlineSwatch.style('background-color', color);
  outlineColor = hexToRGB(color);
}

function hexToRGB(hex) {
  let bigint = parseInt(hex.slice(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function changePattern() {
  patternVariant = (patternVariant + 1) % 5;
  resetDrawing();
}

function resetDrawing() {
  strokeWeight(1);
  fill(255);
}

function handleFile(event) {
  stopPreviousVideo();
  let file = event.target.files[0];

  if (file.type === 'video/mp4') {
    let videoURL = URL.createObjectURL(file);
    video = createVideo(videoURL, () => {
      video.loop();
      video.hide();
      videoLoadedFlag = true;
      video.size(videoCols, videoRows);
      resizeCanvasToWindow();
    });
    video.style('display', 'none');
    video.parent('videoContainer');
    updateLabel(file.name);
  } else {
    alert('Caricare un file video MP4 valido.');
  }
}

function stopPreviousVideo() {
  if (video) {
    video.stop();
    video.remove();
    video = null;
    videoLoadedFlag = false;
  }
}

function updateLabel(fileName) {
  let label = document.getElementById('videoUploadLabel');
  label.textContent = fileName;
  originalLabelText = fileName;
}

function showChooseFileText() {
  document.getElementById('videoUploadLabel').textContent = "UPLOAD VIDEO";
}

function resetLabelText() {
  document.getElementById('videoUploadLabel').textContent = originalLabelText;
}