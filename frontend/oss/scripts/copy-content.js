const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '../content');
const dest = path.join(__dirname, '../.next/public/content');

// Recursively copy directory
function copyDir(srcDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const files = fs.readdirSync(srcDir);
  files.forEach(file => {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    const stat = fs.statSync(srcFile);

    if (stat.isDirectory()) {
      copyDir(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
}

try {
  copyDir(src, dest);
  console.log('✓ Content folder copied to .next/public/');
} catch (error) {
  console.error('✗ Failed to copy content:', error);
  process.exit(1);
}
