/**
 * Created by yifan wang on 2018/4/9.
 */
import {utils} from "../util.js";
import {StringBuffer} from "../../modules/StringBuffer.js";

let viewComponent = {
    displayBoard:(board=utils.required())=>{
        let $table = document.getElementById("table");
        let sb = new StringBuffer();
        let id;
        for(let i = 0,length = board.length;i<length;i++){
            sb.append("<tr>");
            for(let j = 0,length = board[i].length;j<length;j++){
                id = "td" + j + i;
                sb.append("<td id=" + id + ">" + board[i][j] + "</td>");
            }
            sb.append("</tr>");
        }
        $table.innerHTML = sb.toString();
    },
};

export {viewComponent};