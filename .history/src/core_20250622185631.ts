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
    const base64Cursor = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAgCAIAAAB7KQSlAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfpBhUMBQxow/PtAAAD0klEQVQ4y2WVT49cRxXFz7l1Xz9325NMMsEQzL+M5URIRAKibPI12OUzIm+QiFBWIDZsQVHEKsQitrAnyvRMd7/3qurew6LHeHDOpqQq/XRuXZ1bxevrawAkJURvIEgDQBAEQAAgjGZmmSHJJZlZa61OV1I3IwCAAkhzd5KZeX11OU31xz85Ly+3NO+37r2UgdTRQhDJYqKh1nrx/Nlut1uN47sPzp1my2GfMcNLa5WkkSBIHlejrq+u3IeTk5Pd9XUqjUBdZkC9Z+/RW2+9t9ZarbXW3ts8zWb8y1//9vjxH07f2PRaLVPT4dBabbX1Hr1H7733aL333nqLWithf/r8z79//FmtDaRHxH63uzMKZhm6KYkAYGYxiIjdbv/8PxcApnlxd5cyIqa5SpAIiCQACWZ0L6uh1Noy4sGP7o/jeNPryBRgZESCICJDqSS5LLat0zs/ePuH98/e+/mDu/fugXQIh/0s9VKYoTKUYsgUyc1m01r75umzdx/c//TT352+eVJ8JOhWymocD/ulNRFsrVuhmRltmpZ5Xv7x9y8fPTr/5JOPa62rcQ3CAChVzN0H0iS0GrVGbX06LHVpX/3ryWd//Pyw35FlNa6Vye12+88vvozoklrtmSFkRBKKyM3dzenZ2ZOvv37n7I33P/jlMN6Vws1sGFxKkhGyQinJzAggWuvnDx/+6sMPp2mODCkBOoBxHOtSBQzDQCgigFCKLACnaYqIY/YBAPDMrLX64L13o/lQXKX0dC8RIQGSlaIIvJSTBNVb7T0iVBoBZYrGcVxtNhv3AgkvTQA4wXma52kehoHGzIjIlMxI4ABIeE1uXsCyzIukUry4ATQhM2qtNOMth5cMudlsvvv228NhkuCDlWLFXEIqMC/5PSOXtNmsN5sNACl7REZvUUk7jrAyQeAW6ABArtd3ipfWupGglFpqU6J4AQkBunlOAPixIRFRvBSzyICUCS+OotW4dnfhFXDjI2malh5BWCozUpJ7yVTx9FJeu5IbuSzLNM2psbUwEpAPXlvvPU/eHEAqxdd9UhG91SKpZQLqEV5Ka63Vdpza28U5gDvrO8tSJb4KVYYySRvHkTQg/q+2iDh96/Rw2O92u/V6Mwx+JElrtdXe8D1ZRNy9d++3H3+0Goft9vLF8xdX26vpMLXeUsqI2zmQdJPR3vujD95/7+H5xYuLZ0+fPf33N5ffXe72++jx01/87DZTSpHE478giaS7l1J671fbq4uLiydfPXnr7O3ffPTrWuuR3O12q9Xqhvmf9SvYi1LLspjZ8ZTk5eXlarX6L3oJu3ppX+VHAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA2LTIxVDEyOjA0OjU3KzAwOjAw2WJf2gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wNi0yMVQxMjowNDo1NyswMDowMKg/52YAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDYtMjFUMTI6MDU6MTIrMDA6MDDGmozaAAAAAElFTkSuQmCC)"; // shortened

const toiletStyle = document.createElement('style');
toiletStyle.innerHTML = `
  html, body, * {
    cursor: url(${base64Cursor}), auto !important;
  }

  button, a, input, textarea, select, label {
    cursor: url(${base64Cursor}), auto !important;
  }
`;

document.head.appendChild(toiletStyle);

  }
}, { once: true });


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
