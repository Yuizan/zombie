/**
 * Created by yifan wang on 2018/4/9.
 */
import{utils} from "../util.js";

class Character {
    constructor(x = utils.required(),y = utils.required()){
        this.x = parseInt(x);
        this.y = parseInt(y);
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    /**
     *  get next position, zombie can go opposite side
     */
    getNextPos(direction,dimen){
        switch (direction){
            case "U":{
                this.y--;
                break;
            }
            case "L":{
                this.x--;
                break;
            }
            case "D":{
                this.y++;
                break;
            }
            case "R":{
                this.x++;
                break;
            }
            default:{
                throw new Error("direction is wrong");
            }

        }
        if(
            dimen !== undefined
            && this.x === dimen
        ){
            this.x = 0;
        }else if(
            dimen !== undefined && this.x === -1
        ){
            this.x = dimen - 1;
        }else if(
            dimen !== undefined && this.y === dimen
        ){
            this.y = 0;
        }else if(
            dimen !== undefined && this.y === -1
        ){
            this.y = dimen - 1;
        }
        return this.toString();
    }

    toString(){
        let position = {
            x:this.x,
            y:this.y
        };
        return position;
        //return `(${this.x},${this.y})`;
    }
}

export {Character}