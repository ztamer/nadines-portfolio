import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const images = [
  // Sun Hung photos (parallax floating cards)
  { url: 'https://framerusercontent.com/images/3woYe9xHcoR0LHVh95GpTML4DU.jpg', dest: 'public/images/sunhung-photo-1.jpg' },
  { url: 'https://framerusercontent.com/images/YzJnfVqsxc8UguRjPEvxgwI1og.jpg', dest: 'public/images/sunhung-photo-2.jpg' },
  { url: 'https://framerusercontent.com/images/FmW9EUt1JY22AzmU0O8pr5bgo0.jpg', dest: 'public/images/sunhung-photo-3.jpg' },
  { url: 'https://framerusercontent.com/images/fnz5j97kzMQnr9M7Q4hkFNzASZ0.jpg', dest: 'public/images/sunhung-photo-4.jpg' },
  { url: 'https://framerusercontent.com/images/WiFnUJg890rRnIbTe0vuDEUk.jpg', dest: 'public/images/sunhung-photo-5.jpg' },
  { url: 'https://framerusercontent.com/images/9Nmq2CBdWa5NE99AAHXXTgsPAM.jpg', dest: 'public/images/sunhung-photo-6.jpg' },
  { url: 'https://framerusercontent.com/images/DMekybJ5xvVRDZjpICAO9bNA.jpg', dest: 'public/images/sunhung-photo-7.jpg' },
  { url: 'https://framerusercontent.com/images/Hgr65zFcwa5pElHpExE6LJudm0.jpg', dest: 'public/images/sunhung-photo-8.jpg' },
  { url: 'https://framerusercontent.com/images/thq0jlUNjgRGthS88lVCB9r35Y.jpg', dest: 'public/images/sunhung-photo-9.jpg' },
  // Design / project images
  { url: 'https://framerusercontent.com/images/Cck67geu8eVKjz7mQtnxRXkY.webp', dest: 'public/images/design-work-1.webp' },
  { url: 'https://framerusercontent.com/images/UeSiWGi3nUKunh3W4pEpGW8u5K4.png', dest: 'public/images/design-work-2.png' },
  { url: 'https://framerusercontent.com/images/BO4v1zzGmf5eA3osW1s6v8M5w.jpg', dest: 'public/images/project-pango-cdp.jpg' },
  { url: 'https://framerusercontent.com/images/STkYjWaM1i6wmnTh4yIibvmvo.jpg', dest: 'public/images/project-2.jpg' },
  { url: 'https://framerusercontent.com/images/LoZV0FH52pU8337Nsd1aPAKxHls.jpg', dest: 'public/images/project-3.jpg' },
  { url: 'https://framerusercontent.com/images/uwCoWT88FzkcqDimC5dJXABxf8.jpg', dest: 'public/images/project-master-channel.jpg' },
  { url: 'https://framerusercontent.com/images/tCFr40M0o41bj4k2xuo4V2clHE.jpg', dest: 'public/images/project-5.jpg' },
  { url: 'https://framerusercontent.com/images/tje0Em6vQwf5h3v6Gl50HtZhoKc.jpg', dest: 'public/images/project-6.jpg' },
  { url: 'https://framerusercontent.com/images/1iFdgCFa8kd2c18qh6Z0jKqlmo.jpg', dest: 'public/images/project-7.jpg' },
  { url: 'https://framerusercontent.com/images/ItXJ5IsTSqq5PT82XDRrmABqkZk.jpg', dest: 'public/images/project-8.jpg' },
  // Client logos
  { url: 'https://framerusercontent.com/images/8oqRByBlCpSaFvYxxJV6NxPog.png', dest: 'public/images/client-logo-1.png' },
  { url: 'https://framerusercontent.com/images/rXW0a9zbou1l5sC6EcMJZSFWCqs.png', dest: 'public/images/client-logo-2.png' },
  // Favicon
  { url: 'https://framerusercontent.com/images/S59RB7in480eVPSf2K1NgDnlYU.svg', dest: 'public/seo/favicon.svg' },
  { url: 'https://framerusercontent.com/images/qW2AXd9Ha8UMnDIVSQd4PFGU.png', dest: 'public/seo/apple-touch-icon.png' },
  // Fonts
  { url: 'https://framerusercontent.com/assets/iiO6afikJG8hVIKroJO2me2fI.woff2', dest: 'public/fonts/vc-nudge-black.woff2' },
  { url: 'https://framerusercontent.com/assets/GTvzg3lDGJfDEkaoHwT2ZX7U9QM.woff2', dest: 'public/fonts/aeonik-mono-regular.woff2' },
  { url: 'https://framerusercontent.com/assets/CTX3fHUepJxbyoY195f0xCdXUU.woff2', dest: 'public/fonts/pp-supply-mono.woff2' },
];

async function download(url, destRel) {
  const dest = join(ROOT, destRel);
  const dir = dirname(dest);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  if (existsSync(dest)) { console.log(`  skip (exists): ${destRel}`); return; }

  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    writeFileSync(dest, Buffer.from(buf));
    console.log(`  ✓ ${destRel} (${Math.round(buf.byteLength / 1024)}kb)`);
  } catch (e) {
    console.error(`  ✗ ${destRel}: ${e.message}`);
  }
}

async function main() {
  console.log(`Downloading ${images.length} assets...`);
  // Process in batches of 4
  for (let i = 0; i < images.length; i += 4) {
    const batch = images.slice(i, i + 4);
    await Promise.all(batch.map(({ url, dest }) => download(url, dest)));
  }
  console.log('Done!');
}

main();
