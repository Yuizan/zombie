/**
 * Created by yifan wang on 2018/4/9.
 */
import {ListCharacter} from "./ListCharacter.js";
import {Zombie} from "./Zombie.js";

class ListZombie extends ListCharacter{
    constructor(position) {
        super(position);
    }

    placeZombies(board){
        for(let i = 0,length = this.positions.length;i<length;i++){
            const position = this.positions[i];
            const zombie = new Zombie(position.x,position.y);
            zombie.placeZombie(board);
        }
    }
}

export {ListZombie};