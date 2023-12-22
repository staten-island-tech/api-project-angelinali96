import { DOMSelect } from './dom';
import {xpathDom} from './dom';
import './buses';

const proxy = 'https://corsproxy.io/?'; // ik we werent supposed to use cors apis but i really wanted to make this project

async function getApi(stop, direction, instance){ // fetch stops api
    try{
        const stopsApi = `https://bustime.mta.info/api/stops-on-route-for-direction?routeId=MTA+NYCT_${stop.replace(/\-SBS/, '%2B')}&directionId=${direction}`;
        const response = await fetch(proxy+encodeURI(stopsApi));
        const data = await response.json();
        const stops = data.stops;
        DOMSelect.stops[instance].innerHTML = `<option value="">select stop</option>`;
        stops.forEach(element => {
            DOMSelect.stops[instance].insertAdjacentHTML("beforeend", `
    <option value="${element.id.replace('MTA_', '')}">${element.name}</option>
    ` 
    );
        });
        if(response.status != 200){
            throw new Error(response.statusText);
        }
    } catch (error){
        console.log(error, "API Error");
    }
}
DOMSelect.submitBus.addEventListener("submit", function(event){
    event.preventDefault();
    getApi(DOMSelect.options[0].value, DOMSelect.direction[0].value, 0);
    getApi(DOMSelect.options[1].value, DOMSelect.direction[1].value, 1);
}
);
