/**
 * Created by yifan wang on 2018/4/9.
 */
import {utils} from "../util.js";
import {GameData} from "./GameData.js";
import {viewComponent} from "../View/ViewComponent.js";
import {resultComponent} from "../View/ResultComponent.js";
import {Zombie} from "../model/Zombie.js";
import {config} from "../config.js";

class GameBoard{

    constructor(initDetail = utils.required()){
        if(initDetail.length !== 4){
            throw new Error("InitDetail load failed or context is wrong");
        }
        this._dimen = initDetail[0];
        this._zombiePosition = initDetail[1];
        this._createurePosition = initDetail[2];
        this._zombieMove = initDetail[3];
        this._gameData = null;
        this.interval = null;
    }

    /**
     * game initialization
     */
    init(){
        this._gameData = new GameData(this._dimen,this._zombiePosition,this._createurePosition);
        this._gameData.initBoard();
        viewComponent.displayBoard(this._gameData.getBoard());
    }

    /**
     *  game start
     */
    startMove(){
        return new Promise((resolve, reject) => {
            let moves = utils.getMoves(this._zombieMove);
            let moveIndex = 0;
            this.interval = setInterval(()=>{
                const masterPos = this._gameData.getMasterZombie();
                let zombie = new Zombie(masterPos.x,masterPos.y);

                // Boolean: zombie is do the last action or not
                let isEnd = moveIndex === moves.length - 1;

                // Zombie start move
                zombie.move(moves[moveIndex],this._gameData,isEnd);
                moveIndex += 1;

                // refresh board
                this._gameData.initBoard();

                if( // game finish all of zombies moved
                    moveIndex === moves.length
                    && this._gameData.getMasterZombieIndex() === this._gameData.getZombies().length - 1
                ){
                    resolve(true);
                }
                else if( // game finish if there is no more creature in the board
                    this._gameData.getCreatures().length === 0
                ){
                    resolve(true);
                }

                if( // current zombie did the next action
                    moveIndex === moves.length
                    && this._gameData.getMasterZombieIndex() < this._gameData.getZombies().length-1
                ){  // next zombie prepare for doing the action
                    this._gameData.nextMasterZombie();
                    moveIndex = 0;
                }
            },config.speed);
        });

    }

    /**
     *  action after game finish
     */
    moveFinish(){
        clearInterval(this.interval);
        resultComponent.displayZombies(this._gameData.getZombies());

        setTimeout(()=>{
            alert("Finished");
        },500);

    }

}

export {GameBoard};