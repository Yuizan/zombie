/**
 * Created by yifan wang on 2018/4/9.
 */
import{utils} from "../util.js";
class ListCharacter {
    constructor(position = utils.required()){
        this.positions = position;
    }
    listPositions(){
        return this.positions;
    }

    toString(){
        return `(${this.positions})`;
    }
}

export {ListCharacter}