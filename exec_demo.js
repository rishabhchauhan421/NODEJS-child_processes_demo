const { exec } = require('child_process');

exec('find /', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr.message}`);
    return;
  }
  console.log(`output: ${stdout.message}`);
});
