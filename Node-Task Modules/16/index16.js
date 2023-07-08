const net = require('net');

// Create a TCP socket
const client = new net.Socket();

// Connect to the server
const serverHost = 'localhost'; // Replace with the server's host
const serverPort = 3000; // Replace with the server's port
client.connect(serverPort, serverHost, () => {
  console.log('Connected to the server');

  // Send data to the server
  const message = 'Hello, server!';
  client.write(message);
});

// Handle data received from the server
client.on('data', (data) => {
  console.log(`Received data from server: ${data}`);
});

// Handle connection termination
client.on('close', () => {
  console.log('Connection closed');
});

// Handle connection errors
client.on('error', (error) => {
  console.error('An error occurred:', error);
});
