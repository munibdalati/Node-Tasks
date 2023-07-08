var crypto = require('crypto');

const randomBytes = crypto.randomBytes(4); // Generate 4 random bytes

// Convert the random bytes to a number
const randomNum = parseInt(randomBytes.toString('hex'), 16);

console.log('Random Number:', randomNum);