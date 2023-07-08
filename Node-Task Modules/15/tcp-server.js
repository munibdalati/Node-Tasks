const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
  // New client connected
  console.log('A new client has connected.');

  // Handle data received from the client
  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);

    // Echo the received data back to the client
    socket.write(data);
  });

  // Handle client connection termination
  socket.on('end', () => {
    console.log('Client has disconnected.');
  });
});

// Start the server and listen on a specific port
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});
