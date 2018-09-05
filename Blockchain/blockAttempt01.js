var sha256 = require('sha-256-js'); // SHA256 Hashing algorithm.
var utf8 = require('utf8'); // UTF-8.
var nixTime = require('unix-timestamp'); // Get UNIX time.

var block = { // Data structure of a block.
    index: null,
    timestamp: null,
    BPM: null,
    bHash: null,
    bPrevHash: null
};

var blockchain = []; // Blockchain array to hold the blocks.

// const isBlockValid = (newBlock, oldBlock) => {
//     if (oldBlock.index + 1 != newBlock.index) {
//         return false;
//     }else if (oldBlock.bHash != newBlock.bPrevHash) {
//         return false;
//     }else if (calculateHash(newBlock) != newBlock.block) {
//         return false; 
//     }
//     return true;
// }

const createHash = (block) => { // Create a hash for the block.
    var hInput = utf8.encode(block.index + block.timestamp + block.BPM);
    return utf8.encode(sha256(hInput)); // Return the hash as a utf8 encoded string.
}

const getIndexValue = () => { // Gets the index value for the block.
    if (blockchain.length != 0) { // Checks to see if we are doing the root block.
        return blockchain.length + 1;
    }
    return 0;
}

const getPrevHash = (oldBloc) => { // Get the previous hash of the block.
    if (oldBloc == null) { // Checks to see if there are any block previous.
        return 0;
    }

    return oldBloc.bHash;
}

const generateBlock = (oldBloc, data) => { // Create a block.
    var newBlock = block;

    var t = nixTime.now();
    newBlock.index = getIndexValue();
    newBlock.timestamp = t.toString();
    newBlock.bPrevHash = getPrevHash();
    newBlock.BPM = data;
    newBlock.bHash = createHash(newBlock);

    return newBlock;
}

console.log('createing a block');
var newBlock = generateBlock(null, 5);
var json = JSON.stringify(newBlock);
console.log('json');
console.log(newBlock);
