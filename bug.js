const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling is incomplete, the error is not properly logged or handled
    console.error('Error:', err); //This will log the error, but the request won't be handled properly
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a random error
    if (Math.random() < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});