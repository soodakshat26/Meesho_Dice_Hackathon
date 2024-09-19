const axios = require('axios');
const spawn = require('child_process').spawn;

exports.predict = async (data) => {
  return new Promise((resolve, reject) => {
    const python = spawn('python', ['path_to_your_python_script.py', JSON.stringify(data)]);

    python.stdout.on('data', (data) => {
      resolve(JSON.parse(data.toString()));
    });

    python.stderr.on('data', (data) => {
      reject(data.toString());
    });
  });
};
