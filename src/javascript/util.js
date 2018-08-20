/**
 * Created by yifan wang on 2018/4/9.
 */
let utils = {
    required:()=>{
        throw new Error("Missing parameter");
    },
    getPositionFromArray:(position)=>{
        let positions = [];

        const posArray = position.split(")(");
        for(let i = 0,length = posArray.length;i<length;i++){
            const tempPos = posArray[i].replace('(',"").replace(')',"").split(",");
            if(tempPos.length !== 2){
                throw new Error("position error");
            }
            let pos = {x:parseInt(tempPos[0]),y:parseInt(tempPos[1])};

            positions.push(pos);
        }
        return positions;
    },
    getMoves:(move)=>{
        let moves = [];

        for(let i = 0,length = move.length;i < length;i++){
            moves.push(move.charAt(i));
        }
        return moves;
    },
    posIndexInArray(array,position){
        let result = -1;
        for(let i = 0,length = array.length; i < length;i++){
            //return index
            if(
                array[i].x === position.x
                && array[i].y === position.y
            ){
                result = i;
            }
        }
        //return -1
        return result;
    }
};


export {utils};
