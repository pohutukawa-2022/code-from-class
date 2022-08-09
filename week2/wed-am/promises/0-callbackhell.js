/**
 * ---------- USER STORY----------
 * I want to be able to combine all art into one big file
 */

const path = require('path');
const fs = require('fs');

const files = [
  'kea.txt',
  'kiwi.txt',
  'manaia.txt',
  'nikau.txt',
  'pohutukawa.txt',
];

const filePaths = files.map((file) => path.join(__dirname, 'data', file));

function combineArts() {
  fs.readFile(filePaths[0], 'utf-8', (err, kea) => {
    if (err) console.error(err);
    fs.readFile(filePaths[1], 'utf-8', (err, kiwi) => {
      if (err) console.error(err);
      fs.readFile(filePaths[2], 'utf-8', (err, manaia) => {
        if (err) console.error(err);
        fs.readFile(filePaths[3], 'utf-8', (err, nikau) => {
          if (err) console.error(err);
          fs.readFile(filePaths[4], 'utf-8', (err, pohutukawa) => {
            if (err) console.error(err);

            const newArt = `
            ${kea}
            ${kiwi}
            ${manaia}
            ${nikau}
            ${pohutukawa}
            `;
            const myNewFilePath = path.join(__dirname, 'data', 'combined.txt');

            fs.writeFile(myNewFilePath, newArt, (err) => {
              if (err) {
                console.error(err);
              }
              console.log('your art has been combined, woohoo');
            });
          });
        });
      });
    });
  });
}

combineArts();
