const { put } = require('@vercel/blob');
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
for (const line of envContent.split('\n')) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const eqIndex = trimmed.indexOf('=');
  if (eqIndex === -1) continue;
  const key = trimmed.slice(0, eqIndex);
  let value = trimmed.slice(eqIndex + 1);
  if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
  process.env[key] = value;
}

const POSTERS_DIR = path.join(__dirname, 'posters');

async function main() {
  const files = fs.readdirSync(POSTERS_DIR).filter(f => f.endsWith('.jpg'));
  const mapping = {};

  for (const filename of files) {
    const filePath = path.join(POSTERS_DIR, filename);
    const fileBuffer = fs.readFileSync(filePath);
    const blobPath = 'posters/' + filename;
    console.log('Uploading ' + filename + ' (' + (fileBuffer.length / 1024).toFixed(0) + ' KB)...');
    const blob = await put(blobPath, fileBuffer, {
      access: 'public',
      contentType: 'image/jpeg',
    });
    mapping[filename] = blob.url;
    console.log('  -> ' + blob.url);
  }

  const outputPath = path.join(__dirname, 'poster-url-mapping.json');
  fs.writeFileSync(outputPath, JSON.stringify(mapping, null, 2));
  console.log('\nMapping saved to ' + outputPath);
}
main().catch(err => { console.error(err); process.exit(1); });
