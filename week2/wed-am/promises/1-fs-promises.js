const fs = require('fs').promises;
// const fs = require('fs/promises')
const path = require('path');

const files = [
  'kea.txt',
  'kiwi.txt',
  'manaia.txt',
  'nikau.txt',
  'pohutukawa.txt',
];

const filePaths = files.map((file) => path.join(__dirname, 'data', file));

async function combine() {
  console.log('16');
  const kea = await fs.readFile(filePaths[0], 'utf-8');
  console.log('18');
  const kiwi = await fs.readFile(filePaths[1], 'utf-8');
  console.log('20');
  const manaia = await fs.readFile(filePaths[2], 'utf-8');
  console.log('22');
  const nikau = await fs.readFile(filePaths[3], 'utf-8');
  console.log('24');
  const pohutukawa = await fs.readFile(filePaths[4], 'utf-8');
  console.log('26');
  const combinedArt = `
${kea}
${kiwi}
${manaia}
${nikau}
${pohutukawa}
`;

  const newArtPath = path.join(__dirname, 'data', 'combined.txt');

  await fs.writeFile(newArtPath, combinedArt, 'utf-8');

  console.log('your data is written, horaay');
}

async function inspectPromise() {
  try {
    const kea = await fs.readFile(
      path.join(__dirname, 'data', 'fake text file.txt'),
      'utf-8'
    );
    console.log(kea);
  } catch (error) {
    console.error('Here is the error', error);
  }
}

inspectPromise().then();
// combine().then();
