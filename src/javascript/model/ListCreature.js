/**
 * Created by yifan wang on 2018/4/9.
 */
import {ListCharacter} from "./ListCharacter.js";
import {Creature} from "./Creature.js";

class ListCreature extends ListCharacter{
    constructor(position) {
        super(position);
    }

    placeCreatures(board){
        for(let i = 0,length = this.positions.length;i<length;i++){
            const position = this.positions[i];
            const creature = new Creature(position.x,position.y);
            creature.placeCreature(board);
        }
    }
}

export {ListCreature};