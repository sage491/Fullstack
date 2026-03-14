const http = require('http');

const data = JSON.stringify({ name: 'Alice', age: 21 });

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/student',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
  },
};

const req = http.request(options, (res) => {
  let body = '';
  console.log('STATUS', res.statusCode);
  res.on('data', (chunk) => (body += chunk));
  res.on('end', () => {
    console.log('BODY', body);
  });
});

req.on('error', (e) => console.error('Request error:', e));
req.write(data);
req.end();
