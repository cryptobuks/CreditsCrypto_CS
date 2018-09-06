class Data {
    constructor(type, ownerAddr, recvAddr, amount) {
        this.type = String(type);
        this.ownerAddr = String(ownerAddr);
        this.recvAddr = String(recvAddr);
        this.amount = String(amount);
    }
}

module.exports = Data;
