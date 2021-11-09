///NAME :SAVITA SHARMA
//PROGRAM :8110 Section 1
module.exports = class Order{
    constructor(sNumber, sUrl){
        this.sNumber = sNumber;
        this.sUrl = sUrl;
        this.bDone = false;
    }
    isDone(bDone){
        if(bDone){
            this.bDone = bDone;
        }
        return this.bDone;
    }
}