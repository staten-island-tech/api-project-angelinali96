import { DOMSelect } from './dom';
import './buses';

const proxy = 'https://corsproxy.io/?'; // ik we werent supposed to use cors apis but i really wanted to make this project

async function getApi(stop, direction){ // fetch stops api
    try{
        const stopsApi = `https://bustime.mta.info/api/stops-on-route-for-direction?routeId=MTA+NYCT_${stop}&directionId=${direction}`;
        const response = await fetch(proxy+stopsApi);
        const data = await response.json();
        console.log(data.stops);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
    } catch (error){
        console.log(error, "API Error");
    }
}
DOMSelect.submitBus.addEventListener("click", function(event){
    event.preventDefault();
    getApi(DOMSelect.options1.value, DOMSelect.direction1.value);
    getApi(DOMSelect.options2.value, DOMSelect.direction2.value);
}
);
