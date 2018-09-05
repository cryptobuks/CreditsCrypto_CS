var sha256 = require('sha-256-js');
var nixTime = require('unix-timestamp');
var utf8 = require('utf8');

class Block {
    constructor(data, previousBlock, previousIndex) {
        this.credits = utf8.encode(data);
        this.index = previousIndex  + 1;
        this.bPreviousHash = previousBlock;
        this.timestamp = nixTime.now();
        this.bHash = this.createHash();
    }

    createHash() {
        var hInput = utf8.encode(this.credits, this.timestamp, this.index);
        //console.log(utf8.encode(sha256(hInput)));
        return utf8.encode(sha256(hInput));
    }
}

module.exports = Block; // Export the Block class.