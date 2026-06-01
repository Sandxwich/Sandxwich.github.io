async function initAsciiAnimation() {
  const asciiDebugEl = document.getElementById('asciiDebug');
  const logDebug = (message, data) => {
    const text = data !== undefined ? `${message} ${JSON.stringify(data)}` : message;
    console.log('[ascii]', text);
    if (asciiDebugEl) {
      asciiDebugEl.textContent = text;
    }
  };

  logDebug('initAsciiAnimation');
  const asciiAnimationEl = document.getElementById('asciiAnimation');
  if (!asciiAnimationEl) {
    logDebug('element #asciiAnimation not found');
    return;
  }

  logDebug('element found', { id: asciiAnimationEl.id });
  asciiAnimationEl.textContent = 'Loading animation...';

  const framesFile = 'animations/ascii-frames.txt';
  const frames = await loadAsciiFramesFromFile(framesFile) || buildDefaultAsciiFrames();

  if (!frames.length) {
    asciiAnimationEl.textContent = 'No animation frames available.';
    logDebug('no frames loaded');
    return;
  }

  let frameIndex = 0;
  asciiAnimationEl.textContent = frames[frameIndex];
  logDebug('initial frame loaded', frameIndex);

  setInterval(() => {
    frameIndex = (frameIndex + 1) % frames.length;
    asciiAnimationEl.textContent = frames[frameIndex];
    logDebug('frame changed', frameIndex);
  }, 320);
}

async function loadAsciiFramesFromFile(path) {
  try {
    const response = await fetch(path, { cache: 'no-store' });
    if (!response.ok) {
      console.warn(`[ascii] failed to load frame file ${path}: ${response.status}`);
      return null;
    }

    const text = await response.text();
    const frames = text
      .trim()
      .split(/\r?\n---FRAME---\r?\n/)
      .map(frame => frame.replace(/\r/g, ''))
      .filter(frame => frame.length > 0);

    return frames;
  } catch (error) {
    console.warn('[ascii] error loading frame file', error);
    return null;
  }
}

function buildDefaultAsciiFrames() {
  return [
    `   ~~~    
  ~~~~~~   
   ~~~     `,
    `     ~~~
   ~~~~~~  
    ~~~    `,
  ];
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAsciiAnimation);
} else {
  initAsciiAnimation();
}
