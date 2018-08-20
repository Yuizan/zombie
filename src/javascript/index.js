/**
 * Created by yifan wang on 2018/4/9.
 */
import {ReadFile} from "./main/file/ReadFile.js";
import {GameBoard} from "./main/Gameboard.js";


(async function index(undefined){
        //read init.txt; (in bin/init.txt)
        const readFile = new ReadFile();
        const initInfo = await readFile.readStartUpInfo();
        //init Game;
        const gameBoard = new GameBoard(initInfo);
        gameBoard.init();
        //start Game;
        const isFinish = await gameBoard.startMove();
        //Game finish
        if(isFinish){
            gameBoard.moveFinish();
        }
}());
