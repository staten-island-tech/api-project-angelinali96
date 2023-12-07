import { DOMSelect } from './dom';
import './buses';

const proxy = 'https://corsproxy.io/?'; // ik we werent supposed to use cors apis but i really wanted to make this project

async function getApi(stop, direction, instance){ // fetch stops api
    try{
        const stopsApi = `https://bustime.mta.info/api/stops-on-route-for-direction?routeId=MTA+NYCT_${stop}&directionId=${direction}`;
        const response = await fetch(proxy+stopsApi);
        const data = await response.json();
        const stops = data.stops;
        DOMSelect.stops[instance].innerHTML = `<option value="">select stop</option>`;
        stops.forEach(element => {
            DOMSelect.stops[instance].insertAdjacentHTML("afterbegin", `
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
    getApi(DOMSelect.options1.value, DOMSelect.direction1.value, 0);
    getApi(DOMSelect.options2.value, DOMSelect.direction2.value, 1);
}
);
