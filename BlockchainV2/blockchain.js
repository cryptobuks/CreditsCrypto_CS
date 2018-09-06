var Block = require('./block');
var utf8 = require('utf8'); 
var uuidv1 = require('uuid');
var fs = require('fs');

class Blockchain {
    constructor() {
        var myBlock = new Block("null", 0, -1, 'root', 'owner', 'null', 10000000);
        this.chain = [myBlock];
    }

    displayChain() {
        for (var i = 0; i <= this.chain.length - 1; i++) {
            var currentBlock = this.chain[i];
            currentBlock.printLiteral();
        }
    }

    mine() {
        // Process of adding new transactions:

        // Add a new block:
        this.addNewBlock();
        // Proof of work:

        // Check it's valid:
    }

    addNewBlock() {
        // Fetch data about the current blocks in the chain.
        var previousBlock = this.chain[this.chain.length - 1];
        var newIndex = this.chain.length;
        var pbHash = previousBlock.bHash;
        
        // Get the new data:
        var type = 'transaction';
        var ownderAddr = 'tom';
        var recvAddr = 'imy';
        var amount = 69;

        console.log('new block');
        var newBlock = new Block(pbHash, newIndex, type, ownderAddr, recvAddr, amount);
        newBlock.printLiteral();
        this.chain.push(newBlock);
        console.log('new block appened');
    }

    proofOfWork() {

    }

    validityCheck() {

    }

    createWallet() {
        // Create a wallet with address and assign a port to it:
        var newWalletUUID = uuidv1();
        // Send a starter amount of credits to the wallet fromt the root:
        var port = '3000';
        var name = 'tom';

        var obj = {
            uuid: newWalletUUID,
            port: port,
            name: name
        }

        var filepath = './adresses/wallets.json';
        var json = JSON.stringify(obj);

        fs.e2q                                                                               (filepath, json, (err) => {
            console.log(err);
        });
    }
}

module.exports = Blockchain;
