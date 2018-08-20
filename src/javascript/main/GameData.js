/**
 * Created by yifan wang on 2018/4/9.
 * This file stores game data
 */
import {utils} from "../util.js";
import {ListZombie} from "../model/ListZombie.js";
import {ListCreature} from "../model/ListCreature.js";
class GameData{

    constructor(dimen = utils.required(),zombiePosition = utils.required(),creaturePosition = utils.required()){
        this._board = [];
        this._dimen = dimen;
        this._zombiePosition = utils.getPositionFromArray(zombiePosition);
        this._creaturePosition = utils.getPositionFromArray(creaturePosition);
        this._masterZombieIndex = 0;
    }

    initBoard(){
        for(let i = 0,length = this._dimen;i < length; i++){
            this._board[i] = [];
            for(let j = 0,length = this._dimen;j < length; j++){
                this._board[i][j] =  " ";
            }
        }
        this._placeZombieData();
        this._placeCreatureData();
    }

    _placeZombieData(){
        const listZombie = new ListZombie(this._zombiePosition);
        listZombie.placeZombies(this._board);
    }
    _placeCreatureData(){
        const listCreature = new ListCreature(this._creaturePosition);
        listCreature.placeCreatures(this._board);
    }

    /**
     * Master Zombie: The zombie are moving
     * increase index of master zombie in list
     */
    nextMasterZombie(){
        this._masterZombieIndex++;
    }

    getBoard(){
        return this._board;
    }

    /**
     * List of zombies in the board
     */
    getZombies(){
        return this._zombiePosition;
    }

    /**
     *  position of master zombie
     */
    getMasterZombie(){
        return this._zombiePosition[this._masterZombieIndex];
    }

    getMasterZombieIndex(){
        return this._masterZombieIndex;
    }

    /**
     * dimensions of the area
     */
    getDimen(){
        return parseInt(this._dimen);
    }

    /**
     * List of creatures in the board
     */
    getCreatures(){
        return this._creaturePosition;
    }

    setMasterZombie(position){
        this._zombiePosition[this._masterZombieIndex] = position;
    }

}

export {GameData};