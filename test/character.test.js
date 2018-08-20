import {Character} from '../src/javascript/model/Character.js'

describe('Character', ()=> {

    it('Character move', ()=> {
        let testData = [
            {x:1,y:1,dimen:4,action:"L",resultX:0,resultY:1},
            {x:3,y:1,dimen:4,action:"R",resultX:0,resultY:1},
            {x:1,y:3,dimen:4,action:"D",resultX:1,resultY:0},
            {x:1,y:0,dimen:4,action:"U",resultX:1,resultY:3},
            {x:1,y:3,dimen:4,action:"L",resultX:0,resultY:3},
            {x:1,y:2,dimen:4,action:"L",resultX:0,resultY:2}
            ];

        for(let i = 0; i < testData.length;i++){
            let character = new Character(testData[i].x,testData[i].y);
            let pos = character.getNextPos(testData[i].action,testData[i].dimen);
            chai.expect(pos.x).to.equal(testData[i].resultX);
            chai.expect(pos.y).to.equal(testData[i].resultY);
        }
    });


    it('Character toString', ()=> {
        let testData = [
            {x:1,y:1},
            {x:3,y:1},
            {x:1,y:3},
            {x:1,y:0},
            {x:1,y:3},
            {x:1,y:2}
        ];
        for(let i = 0; i < testData.length;i++){
            let character = new Character(testData[i].x,testData[i].y);
            let pos = character.toString();
            chai.expect(pos.x).to.equal(testData[i].x);
            chai.expect(pos.y).to.equal(testData[i].y);
        }
    });

});