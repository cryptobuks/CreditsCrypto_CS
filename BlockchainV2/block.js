var sha256 = require('sha-256-js');
var nixTime = require('unix-timestamp');
var utf8 = require('utf8');

class Block {
    constructor(data, bPreviousBlockHash, bPreviousIndex) {
        this.credits = utf8.encode(data);
        this.index = bPreviousIndex + 1;
        this.bPreviousHash = bPreviousBlockHash;
        this.timestamp = nixTime.now();
        this.bHash = this.createHash();
    }

    createHash() {
        var hInput = utf8.encode(this.credits, this.timestamp, this.index);
        return utf8.encode(sha256(hInput));
    }

    printLiteral() {
        var literal = {
            credits: this.credits,
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
