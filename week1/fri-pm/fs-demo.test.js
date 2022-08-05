const path = require('path');

const fsFuncs = require('./fs-demo');

test('getTheGoods reads contents of file passed to it', (done) => {
  // ARRANGE
  const filePath = path.join(__dirname, 'testdata.txt');

  // ACT
  fsFuncs.getTheGoods(filePath, (err, data) => {
    // ASSERT
    expect(data).toBe('HI Pohutukawa - 2022');
    done();
  });
});

test('getTheGoods throws an error when the file path is empty', (done) => {
  // ARRANGE
  const filePath = null;

  //ACT
  fsFuncs.getTheGoods(filePath, (err) => {
    // ASSERT
    expect(err.message).toBe('file path is empty');
    done();
  });
});

test('getTheGoods calls callback with generic error on error', (done) => {
  // ARRANGE
  const filePath = 'I do not exist';

  // ACT
  fsFuncs.getTheGoods(filePath, (err, contents) => {
    // ASSERT
    expect(err.message).toMatch('Oops');
    expect(contents).toBeUndefined();
    done();
  });
});
