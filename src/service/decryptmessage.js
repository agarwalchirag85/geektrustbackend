const { ASCII_OF_A,ASCII_OF_Z,NO_OF_LETTER, A,Z } = require("../commonconstant/constant");

const decryptingMessage = class {
    constructor(message,cipherKeylength) {
      this.message = message;
      this.cipherKeylength=cipherKeylength;
    }
    
    decrypting() 
    {
        let secretMessage = this.message;
        let decryptedMessage=new Object();
        secretMessage=secretMessage.toUpperCase();
        for(let i=0;i<secretMessage.length;i++)
        {
           
            if (secretMessage[i] >= A && secretMessage[i] <= Z ) {
                let c = secretMessage[i].charCodeAt() - this.cipherKeylength;
                if (c < ASCII_OF_A) {
                    c =  c + NO_OF_LETTER;
                }
                if(decryptedMessage[String.fromCharCode(c)] > 0)
                decryptedMessage[String.fromCharCode(c)]=decryptedMessage[String.fromCharCode(c)]+1;
                else
                decryptedMessage[String.fromCharCode(c)]=1;
            }
            else if(secretMessage[i]!==' ')
            {
                console.log("Input file contains wrong input it should be alphabets");
                return -1;
            }
        }
        return decryptedMessage;
    }
  };


module.exports = { decryptingMessage };