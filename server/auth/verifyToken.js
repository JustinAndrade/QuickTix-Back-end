const jwt = require('jsonwebtoken');

module.exports = { verifyToken, authData }

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken
        next()
    } else {
        res.sendStatus(403)
    }
}

function authData(req, res) {
    jwt.verify(req.token, process.env.SECRET, (err, authData) => {
        try {
            if (err) {
                res.sendStatus(403)
            } else {
                return res.status(200).json(authData)
            }
        } catch (err) {
            res.status(500).json({ message: err })
        }
    })
}
