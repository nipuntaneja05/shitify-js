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
    document.body.style.cursor = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAgCAIAAAB7KQSlAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfpBhUMBQxow/PtAAAD0klEQVQ4y2WVT49cRxXFz7l1Xz9325NMMsEQzL+M5URIRAKibPI12OUzIm+QiFBWIDZsQVHEKsQitrAnyvRMd7/3qurew6LHeHDOpqQq/XRuXZ1bxevrawAkJURvIEgDQBAEQAAgjGZmmSHJJZlZa61OV1I3IwCAAkhzd5KZeX11OU31xz85Ly+3NO+37r2UgdTRQhDJYqKh1nrx/Nlut1uN47sPzp1my2GfMcNLa5WkkSBIHlejrq+u3IeTk5Pd9XUqjUBdZkC9Z+/RW2+9t9ZarbXW3ts8zWb8y1//9vjxH07f2PRaLVPT4dBabbX1Hr1H7733aL333nqLWithf/r8z79//FmtDaRHxH63uzMKZhm6KYkAYGYxiIjdbv/8PxcApnlxd5cyIqa5SpAIiCQACWZ0L6uh1Noy4sGP7o/jeNPryBRgZESCICJDqSS5LLat0zs/ePuH98/e+/mDu/fugXQIh/0s9VKYoTKUYsgUyc1m01r75umzdx/c//TT352+eVJ8JOhWymocD/ulNRFsrVuhmRltmpZ5Xv7x9y8fPTr/5JOPa62rcQ3CAChVzN0H0iS0GrVGbX06LHVpX/3ryWd//Pyw35FlNa6Vye12+88vvozoklrtmSFkRBKKyM3dzenZ2ZOvv37n7I33P/jlMN6Vws1sGFxKkhGyQinJzAggWuvnDx/+6sMPp2mODCkBOoBxHOtSBQzDQCgigFCKLACnaYqIY/YBAPDMrLX64L13o/lQXKX0dC8RIQGSlaIIvJSTBNVb7T0iVBoBZYrGcVxtNhv3AgkvTQA4wXma52kehoHGzIjIlMxI4ABIeE1uXsCyzIukUry4ATQhM2qtNOMth5cMudlsvvv228NhkuCDlWLFXEIqMC/5PSOXtNmsN5sNACl7REZvUUk7jrAyQeAW6ABArtd3ipfWupGglFpqU6J4AQkBunlOAPixIRFRvBSzyICUCS+OotW4dnfhFXDjI2malh5BWCozUpJ7yVTx9FJeu5IbuSzLNM2psbUwEpAPXlvvPU/eHEAqxdd9UhG91SKpZQLqEV5Ka63Vdpza28U5gDvrO8tSJb4KVYYySRvHkTQg/q+2iDh96/Rw2O92u/V6Mwx+JElrtdXe8D1ZRNy9d++3H3+0Goft9vLF8xdX26vpMLXeUsqI2zmQdJPR3vujD95/7+H5xYuLZ0+fPf33N5ffXe72++jx01/87DZTSpHE478giaS7l1J671fbq4uLiydfPXnr7O3ffPTrWuuR3O12q9Xqhvmf9SvYi1LLspjZ8ZTk5eXlarX6L3oJu3ppX+VHAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA2LTIxVDEyOjA0OjU3KzAwOjAw2WJf2gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wNi0yMVQxMjowNDo1NyswMDowMKg/52YAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDYtMjFUMTI6MDU6MTIrMDA6MDDGmozaAAAAAElFTkSuQmCC, auto !important)";

  }

  // 💨 Sound setup
  let fartAudio: HTMLAudioElement | null = null;
  if (options.sound) {
    fartAudio = new Audio("data:audio/mpeg;base64,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"); // adjust path if built differently
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