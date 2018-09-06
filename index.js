var express = require('express');
var fs = require('fs');
var nixTime = require('unix-timestamp');
var Blockchain = require('./BlockchainV2/blockchain');

var app = express();

var CreditsCrypto = new Blockchain();

app.get('/', (req, res) => {
    console.log(CreditsCrypto.displayChain());
    console.log('---');
    res.send('Yo');
});

app.get('/mine', (req, res) => {
    CreditsCrypto.mine();
    CreditsCrypto.displayChain();
});

app.get('/saveChain', (req, res) => {
    console.log(CreditsCrypto.chain);
    var json = JSON.stringify(CreditsCrypto.chain);

    var filepath = `./chainSaves/${nixTime.now()}.json`
    fs.writeFile(filepath, json, (err) => {
        console.log(err);
    });
});

app.get('/createWallet', (req, res) => {
    console.log('create a wallet');
    CreditsCrypto.createWallet();
});

app.listen(5000, () => console.log('listening on port 5000'));