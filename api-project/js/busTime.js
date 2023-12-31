import { DOMSelect, xpathDom } from './dom';
import './buses';
import './stops';

const proxy = 'https://corsproxy.io/?';

async function insertTime(value, instance){
    const currentTime = Date.now();
    const timeUrl = `https://bustime.mta.info/m/index?q=${value}&cacheBreaker=${currentTime}`;
    try{
        const response = await fetch(proxy+timeUrl, {cache: 'reload', headers: {"Access-Control-Max-Age": 0}}); // fetch site
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
        const refreshTime = list.querySelector('#refresh a strong');
        DOMSelect.timeRes[instance].innerHTML = `<strong>${refreshTime.textContent}</strong>`;
        busTimes.forEach(function(item){
            item.childNodes.forEach(function(item){
                DOMSelect.timeRes[instance].insertAdjacentHTML("beforeend", `<p>${item.textContent}</p>`);
            });
        });
    const busHeaders = document.querySelectorAll('p');
    busHeaders.forEach(function(item){
        if(item.innerText.includes('\u00A0') == true){
            item.className = "busHead";
        }
    });
        DOMSelect.timeRes[instance].insertAdjacentHTML("beforeend", `<details id="alerts${instance}">
        <summary>
          service alerts (${list.querySelectorAll('.alerts li').length})
        </summary>
        
      </details>`);
    list.querySelectorAll('.alerts li').forEach(item => document.getElementById("alerts"+instance).insertAdjacentHTML("beforeend", `<p>${item.textContent}</p>`));
    console.log(document.getElementById("alerts"+instance));
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

DOMSelect.refresh.addEventListener("click", function(event){
     event.preventDefault();
    insertTime(DOMSelect.stops[0].value, 0);
     insertTime(DOMSelect.stops[1].value, 1);
}
);
