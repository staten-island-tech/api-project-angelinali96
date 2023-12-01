import '../css/style.css';
import '../css/variables.css';
import './api';
import { DOMSelect } from './dom';

DOMSelect.themer.addEventListener("click", function(){ // theme
    if(DOMSelect.themer.checked === true){
        DOMSelect.body.className = "rainbow";
    }else if(DOMSelect.themer.checked === false){
        DOMSelect.body.className = "dark";
    }
}
);
//API PROJECT
// bus api;  double screen
// https://bustime.mta.info/api/stops-on-route-for-direction?routeId=MTA+NYCT_B8&directionId=1
// fetch id and fill https://bustime.mta.info/m/index?q= id
// route list https://bustime.mta.info/m/routes/
