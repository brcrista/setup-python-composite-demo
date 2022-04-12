const child_process = require('child_process');

child_process.exec(
  'python --version',
  (_, stdout, _) => console.log(stdout));