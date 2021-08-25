const lineReader = require('line-reader');
const { KINGDOM_EMBLEM }=require('./commonconstant/constant');
const { decryptingMessage } = require("./service/decryptmessage");
const { matchingMessage } = require("./service/matchingDecryptedMssg");
const { allies } = require("./service/calculateAllies");


let inputfilepath;
if(process.argv.length===3)
    inputfilepath=process.argv[2];
else
    console.log("Please provide a proper command line for input file path ");


let finallist=new Set();
try{

    lineReader.eachLine(inputfilepath, (line, last) => {

        let emblem=line.substr(0,line.indexOf(' ')); 
        let message=line.substr(line.indexOf(' ')+1);

        let cipherKeylength = KINGDOM_EMBLEM[emblem].length;

        let decryptedMessage = new decryptingMessage(message,cipherKeylength).decrypting();
        if(decryptedMessage!==-1)
        {
            finallist = new matchingMessage(decryptedMessage,emblem,finallist).matching();
            if(last){
                alliesname = new allies(finallist).writingResult();
                console.log(alliesname);
            }
        }
    });
   
}
catch(e)
{
    console.log("Problem while reading the file Please check the path of input file");
}


