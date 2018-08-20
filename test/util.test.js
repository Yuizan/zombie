import {utils} from '../src/javascript/util.js'

describe('Util Test',  async function () {

    it('throw error',()=> {
        let popError = (a = utils.required()) =>{};
        try{
            popError();
        }catch(e){
            console.log(e);
        }
    });

    it('Get Position From Array',()=> {
        let positions = "(0,1)(1,2)(3,1)(4,2)(31,12)(5,3)(231,112)(1235,322)";
        let array = utils.getPositionFromArray(positions);
        chai.expect(utils.getPositionFromArray(positions)).to.be.an("Array");
        for(let i = 0; i < array.length;i++){
            chai.expect(array[i].x).to.be.an("number");
            chai.expect(array[i].y).to.be.an("number");
        }
    });

    it('moves is Array',()=> {
        const moves1 = "DLUURR";
        const moves2 = "DLUUULLDDURR";
        const moves3 = "DLDDUURRUURR";
        const moves4 = "LLLDDDDDLUURR";
        const moves5 = "DLURRDLUURR";
        const moves6 = "RRDLUUULLDDURR";
        const moves7 = "RRRRDDDLDDUURRUURR";
        const moves8 = "RRLLLDDDDDLUURR";
        chai.expect(utils.getMoves(moves1)).to.be.an('Array');
        chai.expect(utils.getMoves(moves2)).to.be.an('Array');
        chai.expect(utils.getMoves(moves3)).to.be.an('Array');
        chai.expect(utils.getMoves(moves4)).to.be.an('Array');
        chai.expect(utils.getMoves(moves5)).to.be.an('Array');
        chai.expect(utils.getMoves(moves6)).to.be.an('Array');
        chai.expect(utils.getMoves(moves7)).to.be.an('Array');
        chai.expect(utils.getMoves(moves8)).to.be.an('Array');
    });

    it('Position.indexOf(pos)',()=> {
        let positions = ["{x:0,y:1}","{x:2,y:1}","{x:3,y:1}","{x:10,y:21}","{x:12,y:12}","{x:33,y:21}","{x:132,y:121}","{x:3233,y:2211}"];
        let pos1 = "{x:0,y:1}";
        let pos2 = "{x:2,y:1}";
        let pos3 = "{x:3,y:1}";
        let pos4 = "{x:10,y:21}";
        let pos5 = "{x:12,y:12}";
        let pos6 = "{x:33,y:21}";
        let pos7 = "{x:132,y:121}";
        let pos8 = "{x:3233,y:2211}";
        chai.expect(utils.posIndexInArray(positions,pos1)).to.not.equal(-1);
        chai.expect(utils.posIndexInArray(positions,pos2)).to.not.equal(-1);
        chai.expect(utils.posIndexInArray(positions,pos3)).to.not.equal(-1);
        chai.expect(utils.posIndexInArray(positions,pos4)).to.not.equal(-1);
        chai.expect(utils.posIndexInArray(positions,pos5)).to.not.equal(-1);
        chai.expect(utils.posIndexInArray(positions,pos6)).to.not.equal(-1);
        chai.expect(utils.posIndexInArray(positions,pos7)).to.not.equal(-1);
        chai.expect(utils.posIndexInArray(positions,pos8)).to.not.equal(-1);
    });

});