var Block = require('./block.js');

class Blockchain {
    constructor() {
        this.chain = [this.createInitialBlock()];
    }
    
    createInitialBlock() {
        var myBlock = new Block(0, "null", -1);
        return Block;
    }

    displayChain() {
        for (var i = 0; i <= this.chain.length; i++) {
            var currentBlock = this.chain[i];
            var literal = {
                index: currentBlock.index,
                credits: currentBlock.credits,
                bPreviousHash: currentBlock.bPreviousHash,
                timestamp: currentBlock.timestamp,
                bHash: currentBlock.bHash
            };

            console.log(literal);
        }
    }
}

var blockchain = new Blockchain();

//blockchain.displayChain();
