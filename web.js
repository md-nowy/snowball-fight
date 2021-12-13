const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
    let myState = arenaUpdate.arena.state[arenaUpdate._links.self.href]
    let moveOrThrow = "T"

    if (myState.wasHit) {
        moveOrThrow = "F"
    }

    res.send(moveOrThrow);
});

app.listen(process.env.PORT || 8080);
