// shitify/src/core.ts

interface ShitifyOptions {
  poopEmoji?: string;
  sound?: boolean;
  cursor?: 'toilet-paper' | 'none';
  maxPoops?: number;
  targets?: string;
}

export function shitify(userOptions: ShitifyOptions = {}) {
  const options: Required<ShitifyOptions> = {
    poopEmoji: userOptions.poopEmoji || '💩',
    sound: userOptions.sound ?? true,
    cursor: userOptions.cursor || 'toilet-paper',
    maxPoops: userOptions.maxPoops || 3,
    targets: userOptions.targets || 'button, a, input[type=submit]',
  };
document.addEventListener('click', () => {
  if (fartAudio && fartAudio.paused) {
    fartAudio.play().catch(() => {});
  }
}, { once: true });
const toiletStyle = document.createElement('style');
toiletStyle.innerHTML = `
  html, body, * {
    cursor: url("/toilet-paper.png"), auto !important;
  }

  button, a, input, textarea, select, label {
    cursor: url("/toilet-paper.png"), auto !important;
  }
`;
document.head.appendChild(toiletStyle);


  // 💩 Inject global CSS
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = '/src/styles.css'; // adjust path if built differently
  document.head.appendChild(style);

  // 🧻 Change cursor
  if (options.cursor === 'toilet-paper') {
    document.body.style.cursor = 'url("/toilet-paper (2).png"), auto';

  }

  // 💨 Sound setup
  let fartAudio: HTMLAudioElement | null = null;
  if (options.sound) {
    fartAudio = new Audio("/fart-83471.mp3"); // adjust path if built differently
 // royalty-free fart sound
  }

  // 💩 Add poop on click
  const elements = document.querySelectorAll(options.targets);
  elements.forEach(el => {
    el.addEventListener('click', (e) => {
      for (let i = 0; i < options.maxPoops; i++) {
        const poop = document.createElement('div');
        poop.className = 'poop';
        poop.textContent = options.poopEmoji;

        const rect = (e.target as HTMLElement).getBoundingClientRect();
        poop.style.left = `${rect.left + rect.width / 2}px`;
        poop.style.top = `${rect.top}px`;

        document.body.appendChild(poop);

        setTimeout(() => poop.remove(), 2000);
      }

      if (fartAudio) {
        fartAudio.currentTime = 0;
        fartAudio.play().catch(() => {}); // silent fail if autoplay blocked
      }
    });
  });
}
