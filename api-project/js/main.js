import '../css/style.css';
import '../css/variables.css';
import './buses';
import './stops';
import './busTime';
import { DOMSelect } from './dom';
import {xpathDom} from './dom';

DOMSelect.themer.addEventListener("click", function(){ // theme
    if(DOMSelect.themer.checked === true){
        DOMSelect.body.className = "rainbow";
    }else if(DOMSelect.themer.checked === false){
        DOMSelect.body.className = "dark";
    }
}
);
