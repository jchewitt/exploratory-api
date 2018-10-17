const express = require('express');
const app = express();
const db = require('./db');
global.__root   = __dirname + '/';
const VerifyToken = require(__root + 'auth/verify-token');

app.get('/api', function (req, res) {
    res.status(200).send('API works.');
});

const UserController = require(__root + 'user/user.controller');
app.use('/api/users', UserController);

const AuthController = require(__root + 'auth/auth.controller');
app.use('/auth', AuthController);

app.use('/api', VerifyToken, require(__root + 'api/api.controller'));

module.exports = app;