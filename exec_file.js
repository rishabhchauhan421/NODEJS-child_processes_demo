const { execFile } = require('child_process');

execFile('./abc.sh', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`output: ${stdout.message}`);
});
