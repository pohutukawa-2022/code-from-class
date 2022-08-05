function scoreFrame(frame, nextFrame) {
  const score = frame[0] + frame[1]
  if (score === 10) {
    const spare = score + nextFrame[0]
    return spare
  }
  return score
}

scoreFrame([5, , 5], [4, 2])

module.exports = {
  scoreFrame,
}
