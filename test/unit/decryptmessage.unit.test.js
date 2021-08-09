const { decryptingMessage } = require("../../src/service/decryptmessage");

describe("Decrypting Message test", () => {

    it("Checking if the input file contains correct input between (A-Za-Z) " ,() =>{
        let secretMessage1 = "R4OZO";
        let cipherKeylength1 = 3; 
      
        let decryptedMessage1 = new decryptingMessage(secretMessage1,cipherKeylength1).decrypting();
        expect(decryptedMessage1).toEqual(-1);

        let secretMessage2 = "ROZO";
        let cipherKeylength2 = 3; 
      
        let decryptedMessage2 = new decryptingMessage(secretMessage2,cipherKeylength2).decrypting();
        expect(decryptedMessage2).not.toEqual(-1);

    });

    it("Decrypting message and generating hash code " ,() =>{

        let secretMessage1 = "ROZO";
        let cipherKeylength1 = 3; 
      
        let expectedOutput1={ 'O': 1, 'L': 2, 'W': 1 };
        let decryptedMessage1 = new decryptingMessage(secretMessage1,cipherKeylength1).decrypting();
        expect(decryptedMessage1).toEqual(expectedOutput1);

        let secretMessage2="FAIJWJSOOFAMAU";
        let cipherKeylength2 = 5; 
        let expectedOutput2={ A: 2, V: 3, D: 1, E: 2, R: 1, N: 1, J: 2, H: 1, P: 1 };
        let decryptedMessage2 = new decryptingMessage(secretMessage2,cipherKeylength2).decrypting();
        expect(decryptedMessage2).toEqual(expectedOutput2);


        let secretMessage3="STHSTSTVSASOS";
        let cipherKeylength3 = 7; 
        let expectedOutput3={ L: 6, M: 3, A: 1, O: 1, T: 1, H: 1 };
        let decryptedMessage3 = new decryptingMessage(secretMessage3,cipherKeylength3).decrypting();
        expect(decryptedMessage3).toEqual(expectedOutput3);

        let secretMessage4="SUMMER IS COMING";
        let cipherKeylength4 = 7; 
        let expectedOutput4={ L: 2, N: 1, F: 3, X: 1, K: 1, B: 2, V: 1, H: 1, G: 1, Z: 1 };
        let decryptedMessage4 = new decryptingMessage(secretMessage4,cipherKeylength4).decrypting();
        expect(decryptedMessage4).toEqual(expectedOutput4);



    });
});
