const { KINGDOM_EMBLEM }=require('../commonconstant/constant');
const matchingMessage = class {
    constructor(decryptedMessage,kingdomEmblem,finallist) {
      this.decryptedMessage = decryptedMessage;
      this.kingdomEmblem=kingdomEmblem;
      this.finallist=finallist;
    }
    
    matching() 
    {
        let flag=0;
        let kingdomName=this.kingdomEmblem;
        let animalEmblem=KINGDOM_EMBLEM[kingdomName];
        let message=this.decryptedMessage;
        for(let i=0;i< animalEmblem.length;i++)
         {
             
             if(message[animalEmblem[i]] > 0)
             {
                message[animalEmblem[i]]=message[animalEmblem[i]]-1;
             }
             else
             {
                 flag=-1;
                 break;
             }
         }

        if(flag === 0)
        this.finallist.add(kingdomName);
              
        return this.finallist;
    }
};

module.exports = {matchingMessage};