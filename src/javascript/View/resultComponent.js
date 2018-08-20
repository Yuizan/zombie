import {utils} from "../util.js";
import {StringBuffer} from "../../modules/StringBuffer.js";

let resultComponent = {
    increaseScore: () =>{
        let $score = document.getElementById("result");
        $score.innerText++;
    },
    displayZombies: (zombies=utils.required()) =>{
        let sb = new StringBuffer();
        let $path = document.getElementById("paths");
        for(let i = 0, length = zombies.length ;i< length ;i++){
            sb.append(`<li><p>(${zombies[i].x},${zombies[i].y})</p></li>`);
        }
        $path.innerHTML = sb.toString();
    }
};

export {resultComponent};