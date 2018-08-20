/**
 * Created by yifan wang on 2018/4/9.
 */
import {Character} from "./Character.js";
import {characterComponent} from "../View/CharacterComponent.js";
import {resultComponent} from "../View/ResultComponent.js";
import {utils} from "../util.js";


class Zombie extends Character{

    constructor(x, y) {
        super(x, y);
        this.sign = "Z";
    }

    /**
     * Zombie walk to next block
     */
    move(direction,gameData,isEnd){
        let prevPosition = {x:this.x,y:this.y};
        const dimen = gameData.getDimen();
        let currPosition = this.getNextPos(direction,dimen);

        // go move;
        gameData.setMasterZombie(currPosition);
        let indexInCreatures = utils.posIndexInArray(gameData.getCreatures(),currPosition);
        //zombie touch creature
        if(indexInCreatures !== -1){
            gameData.getCreatures().splice(indexInCreatures,1);
            gameData.getZombies().push(currPosition);

            // DOM zombie score += 1
            resultComponent.increaseScore();
        }

        // DOM add Zombie
        characterComponent.addZombie(currPosition);

        // DOM remove Zombie
        if(
            utils.posIndexInArray(gameData.getCreatures(),prevPosition) === -1
            && utils.posIndexInArray(gameData.getZombies(),prevPosition) === -1
        ){
            characterComponent.removeZombie(prevPosition);
        }else{
            characterComponent.removeZombieClass(prevPosition);
        }

        if(isEnd){
            characterComponent.removeZombieClass(currPosition);
        }

    }

    placeZombie(board){
        board[this.y][this.x] = this.sign;
    }
}

export {Zombie}