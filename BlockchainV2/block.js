var sha256 = require('sha-256-js');
var nixTime = require('unix-timestamp');
var utf8 = require('utf8');
var Data = require('./data');

class Block {
    constructor(bPreviousBlockHash, bPreviousIndex, type, ownderAddr, recvAddr, amount) {
        this.data = new Data(type, ownderAddr, recvAddr, amount);
        this.index = bPreviousIndex;
        this.bPreviousHash = bPreviousBlockHash;
        this.timestamp = nixTime.now();
        this.bHash = this.createHash();
    }

    createHash() {
        var hInput = utf8.encode(this.data.amount + this.timestamp + this.index);
        return utf8.encode(sha256(hInput));
    }

    printLiteral() {

        var dataLiteral = {
            type: this.data.type,
            ownderAddr: this.data.ownerAddr,
            recvAddr: this.data.recvAddr,
            amount: this.data.amount
        };

        var literal = {
            data: dataLiteral,
            index: this.index,
            previousHash: this.bPreviousHash,
            timestamp: this.timestamp,
            hash: this.bHash
        };
        console.log(literal);
    }

    rtnLiteral() {
        var literal = {
            credits: this.credits,
            index: this.index,
            previousHash: this.bPreviousHash,
            timestamp: this.timestamp,
            hash: this.bHash
        };
        return literal;
    }
}

module.exports = Block;
