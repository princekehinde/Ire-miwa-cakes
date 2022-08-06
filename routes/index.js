const express = require('express');
// const helmet = require('helmet');
// const logger = require('morgan');
// const multer = require('multer');

const app = express();
app.use(express.json())

module.exports = app;