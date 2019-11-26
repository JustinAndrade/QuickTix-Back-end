const server = require('./server/server.js');

const PORT = process.env.PORT || 5000

server.use(PORT, () => {
    `Server is currently running on port: ${PORT}`
})