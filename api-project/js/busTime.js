import { DOMSelect } from './dom';
import './buses';
import './stops';

const proxy = 'https://corsproxy.io/?';

async function insertTime(value, instance){
    const timeUrl = `${proxy}https://bustime.mta.info/m/index?q=${value}`;
    try{
        const response = await fetch(proxy+timeUrl); // fetch site
        const data = await response.text();
        htmlData(data);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
    } catch (error){
        console.log(error, "Error Fetching Buses");
    }
}
function htmlData(data){
    const parser = new DOMParser();
        const list = parser.parseFromString(data, "text/html");
        const busTimes = list.querySelectorAll('.direction-at-stop'); // parse fetched site
}
/* DOMSelect.stops[0].addEventListener("input", function(){
    if(DOMSelect.stops[0] != ''){
    insertTime(DOMSelect.stops[0].value, 0);
    }
}
);
 */