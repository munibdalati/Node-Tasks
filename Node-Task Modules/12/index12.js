const { spawn } = require('child_process');

const command = 'ping';
const args = ['www.google.com'];

const child = spawn(command, args);

child.stdout.on('data', (data) => {
  console.log(data.toString());
});

child.stderr.on('data', (data) => {
  console.error(data.toString());
});

child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});
