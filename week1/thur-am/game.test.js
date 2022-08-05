const { scoreFrame } = require('./game')

test('scoreFrame can score a basic frame', () => {
  //arrange
  const frame = [3, 4]
  const expected = 7
  //act
  const actual = scoreFrame(frame)
  //assert
  expect(actual).toBe(expected)
})

test('scoreFrame can score a spare', () => {
  //arrange
  const frame = [6, 4]
  const nextFrame = [3, 6]
  const expected = 13
  //act
  const actual = scoreFrame(frame, nextFrame)
  //assert
  expect(actual).toBe(expected)
})
