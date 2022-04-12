const child_process = require('child_process');

child_process.exec(
  'python --version',
  (error, stdout, stderr) => console.log(`JavaScript action: ${stdout}`));