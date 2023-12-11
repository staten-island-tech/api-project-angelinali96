import { DOMSelect, xpathDom } from './dom';
import './buses';
import './stops';

const proxy = 'https://corsproxy.io/?';

async function insertTime(value, instance){
    const timeUrl = `https://bustime.mta.info/m/index?q=${value}`;
    try{
        const response = await fetch(proxy+timeUrl); // fetch site
        const data = await response.text();
        htmlData(data, instance);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
    } catch (error){
        console.log(error, "Error Fetching Buses");
    }
}
function htmlData(data, instance){
    const parser = new DOMParser();
        const list = parser.parseFromString(data, "text/html");
        const busTimes = list.querySelectorAll('.directionAtStop'); // parse fetched site
        DOMSelect.timeRes[instance].innerHTML = '';
        busTimes.forEach(function(item){
            item.childNodes.forEach(function(item){
                DOMSelect.timeRes[instance].insertAdjacentHTML("beforeend", `<p>${item.textContent}</p>`)
            });
        });
    // const busHeaders = xpathDom('//p[contains(., "&nbsp;&nbsp;")]');
    // console.log(busHeaders);
    }

DOMSelect.stops[0].addEventListener("input", function(){
    if(DOMSelect.stops[0] != ''){
    insertTime(DOMSelect.stops[0].value, 0);
    }
}
);

DOMSelect.stops[1].addEventListener("input", function(){
    if(DOMSelect.stops[1] != ''){
    insertTime(DOMSelect.stops[1].value, 1);
    }
}
);
