#!/usr/bin/env node
/**
 * Upload all .mp4 files from public/ to Vercel Blob Storage.
 *
 * Usage:
 *   node scripts/upload-videos.js
 *
 * Requires BLOB_READ_WRITE_TOKEN in .env.local
 */

const { put } = require('@vercel/blob');
const fs = require('fs');
const path = require('path');

// Load .env.local
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
for (const line of envContent.split('\n')) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const eqIndex = trimmed.indexOf('=');
  if (eqIndex === -1) continue;
  const key = trimmed.slice(0, eqIndex);
  let value = trimmed.slice(eqIndex + 1);
  // Strip surrounding quotes
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    value = value.slice(1, -1);
  }
  process.env[key] = value;
}

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error('ERROR: BLOB_READ_WRITE_TOKEN not found in .env.local');
  process.exit(1);
}

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

async function main() {
  // Find all .mp4 files in public/
  const allFiles = fs.readdirSync(PUBLIC_DIR);
  const mp4Files = allFiles.filter(f => f.endsWith('.mp4')).sort();

  console.log(`Found ${mp4Files.length} .mp4 files to upload.\n`);

  const mapping = {};

  for (const filename of mp4Files) {
    const filePath = path.join(PUBLIC_DIR, filename);
    const fileBuffer = fs.readFileSync(filePath);
    const blobPathname = `videos/${filename}`;

    console.log(`Uploading ${filename} (${(fileBuffer.length / 1024 / 1024).toFixed(1)} MB)...`);

    try {
      const blob = await put(blobPathname, fileBuffer, {
        access: 'public',
        contentType: 'video/mp4',
      });

      mapping[`/${filename}`] = blob.url;
      console.log(`  ✓ ${blob.url}\n`);
    } catch (err) {
      console.error(`  ✗ Failed to upload ${filename}: ${err.message}\n`);
      process.exit(1);
    }
  }

  // Save mapping to JSON
  const outputPath = path.join(__dirname, 'blob-url-mapping.json');
  fs.writeFileSync(outputPath, JSON.stringify(mapping, null, 2));
  console.log(`\nMapping saved to ${outputPath}`);
  console.log(`\nAll ${mp4Files.length} videos uploaded successfully!`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
