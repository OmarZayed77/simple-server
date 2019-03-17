const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("Home Page"));
app.get('/profile', (req, res) => res.send("Profile Page"));
app.get('/file', (req, res) => {
    if(req.query.name === undefined) throw Error("you should provide image name");
    res.sendFile(path.join(__dirname, 'assets', 'images', req.query.name))
}
);

app.listen(3000);