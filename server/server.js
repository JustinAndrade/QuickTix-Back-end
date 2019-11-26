const express = require('express');
const server = express();
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());
server.use(helmet());

server.get('/', (req, res) => {
    res.json({ message: 'Welcome to the QuickTix Backend' })
})


module.exports = server;
