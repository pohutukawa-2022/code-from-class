function sumScores(scores) {
  let total = 0;
  for (const score of scores) {
    total = total + score;
  }

  return total;
}

function avgScores(scores) {
  const sum = sumScores(scores);
  return sum / scores.length;
}

function myApp() {
  const scores = [10, 12, 6, 5];
  const sum = sumScores(scores);
  const avg = avgScores(scores);

  console.log(`scores: ${scores}`);
  console.log(`sum is ${sum}`);
  console.log(`avg is ${avg}`);
}

myApp();
