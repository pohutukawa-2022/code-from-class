const fs = require('fs');

module.exports = {
  getTheGoods,
};

function getTheGoods(filepath, cb) {
  // check the file path is empty
  if (filepath) {
    // file path is not empty, we can read the file
    fs.readFile(filepath, 'utf8', (err, contents) => {
      // reading a file could fail for any reason:
      // file does not exists
      // or the file requires a specific permissions to be accessed
      if (err) {
        cb(new Error('Oops, something went wrong'));
      } else {
        // we get the contents here
        cb(null, contents);
      }
    });
  } else {
    cb(new Error('file path is empty'));
  }
}
