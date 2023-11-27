const express = require('express');
const { fork } = require('child_process');

const app = express();

//getting data via normal function
app.get('/one', (req, res) => {
  const sum = longComputation();
  return res.send({ sum: sum });
});

//getting data via promise
app.get('/two', async (req, res) => {
  const sum = await longComputatePromise();
  res.send({ sum: sum });
});

//getting data via separate thread
app.get('/three', (req, res) => {
  const child = fork('./long_task_for_fork.js');
  child.send('start');
  child.on('message', (sum) => {
    res.send({ sum: sum });
  });
});

//listening to port
app.listen(3000, () => console.log('listenting 3000'));

//simple calculation
function longComputation() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
}

//return promise
function longComputatePromise() {
  return new Promise((resolve, reject) => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
      sum += i;
    }
    resolve(sum);
  });
}
