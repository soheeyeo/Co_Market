const express = require('express');
const path = require('path');
const app = express();

app.use('/src', express.static(path.resolve(__dirname, 'src')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(5000, function () {
    console.log('listening on 5000')
}); 