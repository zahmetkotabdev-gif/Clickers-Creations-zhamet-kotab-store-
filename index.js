// SUPER SIMPLE TEST (CJS)
const http = require('http');

console.log("---------------------------------------");
console.log("TEST LIGHT: STARTING UP...");
console.log("Time:", new Date().toISOString());
console.log("Port:", process.env.PORT);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('SYSTEM TEST: If you see this, the server is ALIVE!\n');
});

const port = process.env.PORT || 3000;
server.listen(port, '0.0.0.0', () => {
  console.log("✅ SUCCESS: Test Light is ON and listening!");
});
