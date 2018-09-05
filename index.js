var express = require('express');
var Blockchain = require('./BlockchainV2/blockchain');

var app = express();

var CreditsCrypto = new Blockchain();

app.get('/', (req, res) => {
    console.log(CreditsCrypto.displayChain());
    res.send('Yo');
});

app.listen(5000, () => console.log('listening on port 5000'));