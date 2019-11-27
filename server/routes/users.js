require('dotenv').config()
const express = require('express');
const router = express();
const jwt = require('jsonwebtoken')
const { verifyToken, authData } = require('../auth/verifyToken')
const Users = require('../../data/model/users')

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to users' })
})

router.post('/login', (req, res) => {
    const user = {
        id: 2,
        username: 'justin',
        email: 'justin@gmail.com'
    }
    jwt.sign({ user }, process.env.SECRET, { algorithm: 'HS256', expiresIn: '1h' }, (err, token) => {
        res.json(token)
    })
})

router.get('/users', verifyToken, async (req, res) => {
    const data = await Users.find()
    res.status(200).json(data)
})

router.get('/myInfo', verifyToken, (req, res) => {
    res.json(authData(req, res))
})

router.get('/protected', verifyToken, (req, res) => {
    jwt.verify(req.token, process.env.SECRET, (err, authData) => {
        if (err) {
            res.sendStatus(403)
        } else {

            res.json({ message: 'Welcome to the private route', authData })
        }
    })
})

module.exports = router