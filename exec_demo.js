const { exec } = require('child_process');

//'find /' is the command, you can also try "mkdir rishabh" or "pwd"
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
