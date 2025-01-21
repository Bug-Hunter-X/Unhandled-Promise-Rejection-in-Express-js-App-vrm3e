# Unhandled Promise Rejection in Express.js App

This repository demonstrates a common error in Node.js applications using Express.js: improper handling of promise rejections in asynchronous middleware.  The `bug.js` file showcases an Express.js route that performs an asynchronous operation.  However, if the asynchronous operation fails, the error is only logged to the console; no proper response is sent to the client, and the server might silently fail to respond to requests.

The `bugSolution.js` file demonstrates the corrected version with comprehensive error handling using a centralized error handler for all uncaught exceptions and proper response handling for failed requests.