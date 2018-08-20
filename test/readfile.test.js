import {ReadFile} from '../src/javascript/main/file/ReadFile.js'

describe('ReadFile',  async ()=> {
  let readFile = new ReadFile();
  let details;
  it('should return four arguments',async ()=> {
      details = await readFile.readStartUpInfo();
      chai.expect(details.length).to.equal(4);
  });
  it('demin is number',async function () {
      let dimen = parseInt(details[0]);
      chai.expect(dimen).to.be.a('number');
  });
    it('zombie position is correct',async ()=> {
        let position = details[1];
        let positions = [];
        const posArray = position.split(")(");
        for(let i = 0,length = posArray.length;i<length;i++){
            const tempPos = posArray[i].replace('(',"").replace(')',"").split(",");
            positions.push(tempPos);
        }
        chai.expect(positions.length).to.equals(posArray.length);
    });
    it('creative position is correct',async ()=> {
        let position = details[2];
        let positions = [];
        const posArray = position.split(")(");
        for(let i = 0,length = posArray.length;i<length;i++){
            const tempPos = posArray[i].replace('(',"").replace(')',"").split(",");
            positions.push(tempPos);
        }
        chai.expect(positions.length).to.equals(posArray.length);
    });
    it('Moves is String',async ()=> {
        let moves = [];
        for(let i = 0; i < details[3].length;i++){
            moves.push(details[3][i]);
            chai.expect(parseInt(details[3][i])).to.be.deep.equal(NaN);
        }
        chai.expect(moves).to.be.an('Array');
    });
});
