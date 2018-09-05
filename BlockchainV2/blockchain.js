var Block = require('./block');
var utf8 = require('utf8'); 

class Blockchain {
    constructor() {
        var myBlock = new Block(1, "null", -1);
        this.chain = [myBlock];
        this.name = '';
    }

    setName(myName) {
        this.name = myName;
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

        // Proof of work:

        // Check it's valid:
    }

    addNewBlock() {

    }

    proofOfWork() {

    }

    validityCheck() {

    }
}

module.exports = Blockchain;
