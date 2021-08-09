const { KINGDOM_EMBLEM }=require('../commonconstant/constant');
const matchingMessage = class {
    constructor(decryptedMessage,kingdomEmblem,finallist) {
      this.decryptedMessage = decryptedMessage;
      this.kingdomEmblem=kingdomEmblem;
      this.finallist=finallist;
    }
    
    matchting() 
    {
        let flag=0;
        let kindgomename=this.kingdomEmblem;
        let emblem=KINGDOM_EMBLEM[kindgomename];
        let message=this.decryptedMessage;
        for(let i=0;i< emblem.length;i++)
         {
             
             if(message[emblem[i]] > 0)
             {
                message[emblem[i]]=message[emblem[i]]-1;
             }
             else
             {
                 flag=-1;
                 break;
             }
         }
    
        if(flag === 0)
        this.finallist.push(kindgomename);

        return this.finallist;
    }
};

module.exports = {matchingMessage};