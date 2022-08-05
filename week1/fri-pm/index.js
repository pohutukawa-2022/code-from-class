const path = require('path');

const fsFuncs = require('./fs-demo');

const dataPath = path.join(__dirname, 'fakefile.txt');

function showContents(err, contents) {
  if (err) {
    console.error('ERROR!', err.message);
  } else {
    console.log('Contents:', contents);
  }
}

fsFuncs.getTheGoods(dataPath, showContents);
