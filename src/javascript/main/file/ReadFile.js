/**
 * Created by yifan wang on 2018/4/9.
 */
import {config} from "../../config.js";

class ReadFile {
    constructor() {
        this.filePath = config.readFilePath;
    }

    readStartUpInfo(){
        return new Promise((resolve, reject) => {
            let xmlhttp;
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            }
            else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.open("GET", this.filePath , true);
            xmlhttp.onreadystatechange = function() {
                if(xmlhttp.readyState === 4)
                {
                    if(
                        xmlhttp.status === 200
                        || xmlhttp.status === 0
                    ){
                        const allText = xmlhttp.responseText;
                        const startupInfo = allText.split("\n");
                        resolve(startupInfo);
                    }
                }
            };
            xmlhttp.send();
        });
    }
}

export {ReadFile};