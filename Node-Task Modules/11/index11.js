const { exec } = require('child_process');

exec('dir', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Command execution error: ${stderr}`);
    return;
  }
  console.log(`Command output:\n${stdout}`);
});
