import {GameData} from '../src/javascript/main/GameData.js'
import {utils} from '../src/javascript/util.js'
describe('GameData', ()=> {

    it('Init Board', ()=> {
        let testJSON = [
            {dimen:4, zombie:"(2,1)",creature:"(0,1)(1,2)(3,1)"},
            {dimen:5, zombie:"(2,1)(3,2)",creature:"(0,1)(1,2)(3,1)"}
        ];

        for(let i = 0; i < testJSON.length;i++){
            let testZombies;
            let testCreatures;
            let checkedZombie = 0;
            let checkedCreatures = 0;
            let zombies = [];
            let creatures = [];
            let gameData = new GameData(testJSON[i].dimen, testJSON[i].zombie,testJSON[i].creature);
            gameData.initBoard();
            let board = gameData.getBoard();


            //loop board
            for(let y = 0; y < board.length;y++){
                for(let x = 0; x < board.length;x++){
                    if(board[y][x] === "Z"){
                        zombies.push({x:x,y:y});
                    }else if(board[y][x] === "C"){
                        creatures.push({x:x,y:y});
                    }
                }
            }

            testZombies = gameData.getZombies();
            testCreatures = gameData.getCreatures();
            for(let i = 0; i < zombies.length;i++){
                if(utils.posIndexInArray(testZombies,zombies[i]) !== -1){
                    checkedZombie++;
                }
            }
            for(let i = 0; i < creatures.length;i++){
                if(utils.posIndexInArray(testCreatures,creatures[i]) !== -1){
                    checkedCreatures++;
                }
            }

            chai.expect(testZombies.length).to.equal(checkedZombie);
            chai.expect(testCreatures.length).to.equal(checkedCreatures);
        }
    });

    it('Master Ghost', ()=>{
        let testJSON = [
            {dimen:4, zombie:"(2,1)",creature:"(0,1)(1,2)(3,1)"},
            {dimen:5, zombie:"(3,1)(3,2)",creature:"(0,1)(1,2)(3,1)"}
        ];

        for(let i = 0; i < testJSON.length;i++){
            let gameData = new GameData(testJSON[i].dimen, testJSON[i].zombie,testJSON[i].creature);
            gameData.initBoard();
            let zombies = gameData.getZombies();

            chai.expect(zombies[0].x).to.equal(gameData.getMasterZombie().x);
            chai.expect(zombies[0].y).to.equal(gameData.getMasterZombie().y);

        }
    });

    it('Next Master Ghost', ()=>{
        let testJSON = [
            {dimen:4, zombie:"(2,1)",creature:"(0,1)(1,2)(3,1)",next:1,result:{x:2,y:1}},
            {dimen:5, zombie:"(3,1)(3,2)",creature:"(0,1)(1,2)(3,1)",next:1,result:{x:3,y:2}}
        ];

        for(let i = 0; i < testJSON.length;i++){
            let gameData = new GameData(testJSON[i].dimen, testJSON[i].zombie,testJSON[i].creature);
            gameData.initBoard();
            let zombies = gameData.getZombies();
            for(let next = 0; next <testJSON[i].next;next++){
                gameData.nextMasterZombie();
            }

            chai.expect(zombies[gameData.getMasterZombieIndex()].x).to.equal(testJSON[i].result.x);
            chai.expect(zombies[gameData.getMasterZombieIndex()].y).to.equal(testJSON[i].result.y);
        }
    });

    it('set position of Master Ghost', ()=>{
        let testJSON = [
            {dimen:4, zombie:"(2,1)",creature:"(0,1)(1,2)(3,1)",masterZombie:{x:3,y:1}},
            {dimen:5, zombie:"(3,1)(3,2)",creature:"(0,1)(1,2)(3,1)",masterZombie:{x:2,y:1}},
            {dimen:5, zombie:"(3,1)(3,2)",creature:"(0,1)(1,2)(3,1)",masterZombie:{x:3,y:2}},
            {dimen:5, zombie:"(3,1)(3,2)",creature:"(0,1)(1,2)(3,1)",masterZombie:{x:2,y:3}}
        ];

        for(let i = 0; i < testJSON.length;i++){
            let gameData = new GameData(testJSON[i].dimen, testJSON[i].zombie,testJSON[i].creature);
            gameData.initBoard();
            gameData.setMasterZombie(testJSON[i].masterZombie);
            chai.expect(gameData.getMasterZombie().x).to.equal(testJSON[i].masterZombie.x);
            chai.expect(gameData.getMasterZombie().y).to.equal(testJSON[i].masterZombie.y);
        }
    });
});