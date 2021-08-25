const { Console } = require('console');
const fs=require('fs');
const {NO_OF_KINGDOM_ALLY,EMBLEM_OF_CONQUERER,NONE} = require('../commonconstant/constant');

const allies = class{
    constructor(finallist)
    {
        this.finallist=finallist;
    }

    writingResult()
    {
        
            let output="";
            if(this.finallist.size>=NO_OF_KINGDOM_ALLY)
            {
                output=EMBLEM_OF_CONQUERER;
                for(const item of this.finallist)
                    output = output + item +" ";
            }
            else
            {
                output=NONE;
            }

            return output.trim();
    }
    
}

module.exports = { allies };