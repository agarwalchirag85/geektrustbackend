const { expectCt } = require("helmet");
const { matchingMessage } = require("../../src/service/matchingDecryptedMssg");

describe("Matching decrypted Message test", () => {

    it("Should contains kingdome emblem if input are correct ",()=>{

        let finallist=[];
        let decryptedMessage1={ 'O': 1, 'L': 2, 'W': 1 };
        let kingdomEmblem1= "AIR";

        finallist = new matchingMessage(decryptedMessage1,kingdomEmblem1,finallist).matchting();
        expect(finallist).toEqual(expect.arrayContaining(["AIR"]));

        let decryptedMessage2={ A: 2, V: 3, D: 1, E: 2, R: 1, N: 1, J: 2, H: 1, P: 1 };
        let kingdomEmblem2= "LAND";

        finallist = new matchingMessage(decryptedMessage2,kingdomEmblem2,finallist).matchting();
        expect(finallist).toEqual(expect.arrayContaining(["AIR","LAND"]));

        let decryptedMessage3={ L: 6, M: 3, A: 1, O: 1, T: 1, H: 1 };
        let kingdomEmblem3= "ICE";

        finallist = new matchingMessage(decryptedMessage3,kingdomEmblem3,finallist).matchting();
        expect(finallist).toEqual(expect.arrayContaining(["AIR","LAND","ICE"]));
    });

    it("should not contain kingdome emblem if input does not contain kingdome animal name",()=>{

        let finallist=[];
        let decryptedMessage1={ L: 3, T: 3, I: 3, X: 1, Y: 1, Z: 1 };
        let kingdomEmblem1= "AIR";

        finallist = new matchingMessage(decryptedMessage1,kingdomEmblem1,finallist).matchting();
        expect(finallist).not.toEqual(expect.arrayContaining(["AIR"]));
        expect(finallist).toEqual([]);
    })
    

});
