import { DOMSelect } from './dom';
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
        console.log(busTimes); // THIS DOESNT WORK
        DOMSelect.timeRes[instance].innerHTML = '';
        DOMSelect.timeRes[instance].insertAdjacentHTML("afterbegin", `${busTimes}`);
    }

    /* function fetchToHtml(data){
        const parser = new DOMParser();
            const list = parser.parseFromString(data, "text/html");
            const busList = list.querySelectorAll('ul.routeList li'); // parse fetched site
            busList.forEach(res => function(res){
                const list2 = res.querySelector('a').href.split("#", 2);
    DOMSelect.instance[0].insertAdjacentHTML("afterbegin", `
    <option value="${list2[1]}">${res.innerText}</option>
    ` //insert bus routes in 1
    );
}
            }); // for each parsed node
    }
    
     */

DOMSelect.stops[0].addEventListener("input", function(){
    if(DOMSelect.stops[0] != ''){
    insertTime(DOMSelect.stops[0].value, 0);
    }
}
);

DOMSelect.stops[1].addEventListener("input", function(){
    if(DOMSelect.stops[0] != ''){
    insertTime(DOMSelect.stops[0].value, 1);
    }
}
);
