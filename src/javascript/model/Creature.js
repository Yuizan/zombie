/**
 * Created by yifan wang on 2018/4/9.
 */
import {Character} from "./Character.js";


class Creature extends Character{
    constructor(x, y) {
        super(x, y);
        this.sign = "C";
    }

    placeCreature(board){
        board[this.y][this.x] = this.sign;
    }
}

export {Creature}