const { allies } = require("../../src/service/calculateAllies");

describe("Decrypting Message test", () => {

    it("Count number of allies if greater than 3 and print all the values",()=>{
        let finallist=["AIR","LAND","WATER"];
        let output = new allies(finallist).writtigResult();
        expect(output).toEqual("SPACE AIR LAND WATER");
    });

    it("should console NONE IF number of allies is not more than 3",()=>{
        let finallist=["AIR","LAND"];
        let output = new allies(finallist).writtigResult();
        expect(output).toEqual("NONE");
    });
});