'use strict';

const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
const path = require('path');

const PUBLIC_PATH = 'public';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/ping', (req, res, err) => {
    res.status(200);
    res.send('pong');
});

app.get('/ui/', (req, res) => {
    res.sendFile(path.join(__dirname, PUBLIC_PATH, 'index.html'));
});

app.listen(config.PORT, config.HOST, () => {
    console.log(`Express app is listening on http://${config.HOST}:${config.PORT}/`);
    console.log('Configuration: ', config);
    console.log(`HealthCheck:  http://${config.HOST}:${config.PORT}/ping` );
});
