const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'service');

async function processImages() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const filePath = path.join(dir, file);
      const tempPath = path.join(dir, 'temp_' + file);
      
      console.log(`Processing ${file}...`);
      await sharp(filePath)
        .resize(100, 100, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(tempPath);
        
      fs.renameSync(tempPath, filePath);
      console.log(`Successfully resized ${file}`);
    }
  }
  console.log('All images processed!');
}

processImages().catch(console.error);
