async function initAsciiAnimation() {
  const asciiAnimationEl = document.getElementById('asciiAnimation');
  if (!asciiAnimationEl) {
    return;
  }

  asciiAnimationEl.textContent = 'Loading animation...';

  const framesFile = 'animations/ascii-frames.txt';
  const frames = (await loadAsciiFramesFromFile(framesFile)) || buildDefaultAsciiFrames();

  if (!frames.length) {
    asciiAnimationEl.textContent = 'No animation frames available.';
    return;
  }

  let frameIndex = 0;
  asciiAnimationEl.textContent = frames[frameIndex];

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || frames.length === 1) {
    return;
  }

  setInterval(() => {
    frameIndex = (frameIndex + 1) % frames.length;
    asciiAnimationEl.textContent = frames[frameIndex];
  }, 160);
}

async function loadAsciiFramesFromFile(path) {
  try {
    const response = await fetch(path, { cache: 'no-store' });
    if (!response.ok) {
      return null;
    }

    const text = await response.text();
    return text
      .trim()
      .split(/\r?\n---FRAME---\r?\n/)
      .map((frame) => frame.replace(/\r/g, ''))
      .filter((frame) => frame.length > 0);
  } catch (error) {
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
