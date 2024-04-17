const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

sharp(`${target}/hero-image_4.jpg`)
  .resize(800)
  .toFile(path.resolve(
    __dirname,
    `${destination}/hero-image_4.jpg-large.jpg`,
  ));

// Mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
sharp(`${target}/hero-image_4.jpg`)
  .resize(480)
  .toFile(path.resolve(
    __dirname,
    `${destination}/hero-image_4.jpg-small.jpg`,
  ));
