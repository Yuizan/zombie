/**
 * Created by yifan wang on 2018/4/11.
 */
import {utils} from "../util.js";
import {StringBuffer} from "../../modules/StringBuffer.js";

let characterComponent = {
    removeZombie:(position=utils.required())=>{
        let sb = new StringBuffer();
        sb.append("td").append(position.x).append(position.y);
        let $td = document.getElementById(sb.toString());
        $td.innerText = " ";
        $td.classList.remove("zombie");
    },
    addZombie:(position=utils.required())=>{
        let sb = new StringBuffer();
        sb.append("td").append(position.x).append(position.y);
        let $td = document.getElementById(sb.toString());
        $td.innerText = "Z";
        $td.classList.add("zombie");
    },
    removeZombieClass:(position=utils.required())=>{
        let sb = new StringBuffer();
        sb.append("td").append(position.x).append(position.y);
        let $td = document.getElementById(sb.toString());
        $td.classList.remove("zombie");
    },
};

export {characterComponent};