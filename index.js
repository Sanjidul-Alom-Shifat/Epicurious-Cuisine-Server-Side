const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors());

const cheifs=require('./data/cheif.json')

app.get('/', (req, res) => {
    res.send('server is running')
})

app.get('/cheifs', (req, res) => {
    res.send(cheifs)
});

app.get('/cheifs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedId = cheifs.find(c => parseInt(c.id) === id);
    res.send(selectedId)
})

app.listen(port, () => {
    console.log(`Dragon is going on port ${port}`)
})