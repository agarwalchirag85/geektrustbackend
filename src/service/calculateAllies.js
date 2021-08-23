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
            if(this.finallist.length>=NO_OF_KINGDOM_ALLY)
            {
                output=EMBLEM_OF_CONQUERER;
                for(let i=0;i<this.finallist.length;i++)
                    output = output + this.finallist[i]+" ";
            }
            else
            {
                output=NONE;
            }

            return output.trim();
    }
    
}

module.exports = { allies };