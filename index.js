const express = require('express');
const bodyParser = require('body-parser');
import router from './routes'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

module.exports = app;
