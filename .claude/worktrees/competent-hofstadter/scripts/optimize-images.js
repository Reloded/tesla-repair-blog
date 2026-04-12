const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'src', 'images');
const MAX_WIDTH = 1200;
const QUALITY = 80;
const MIN_SIZE = 200 * 1024; // 200KB

async function optimizeImages() {
  function walk(dir) {
    let results = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) results = results.concat(walk(full));
      else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) results.push(full);
    }
    return results;
  }
  const files = walk(IMAGES_DIR);
  
  for (const filePath of files) {
    const file = path.relative(IMAGES_DIR, filePath);
    const stats = fs.statSync(filePath);
    
    if (stats.size < MIN_SIZE) {
      console.log(`SKIP ${file} (${Math.round(stats.size/1024)}KB < 200KB)`);
      continue;
    }

    const webpRelative = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const webpPath = path.join(IMAGES_DIR, webpRelative);
    
    try {
      await sharp(filePath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(webpPath);
      
      const newStats = fs.statSync(webpPath);
      const saved = Math.round((1 - newStats.size / stats.size) * 100);
      console.log(`OK ${file} (${Math.round(stats.size/1024)}KB) -> ${webpRelative} (${Math.round(newStats.size/1024)}KB) [${saved}% smaller]`);
    } catch (err) {
      console.error(`FAIL ${file}: ${err.message}`);
    }
  }
}

optimizeImages().then(() => console.log('\nDone!'));
