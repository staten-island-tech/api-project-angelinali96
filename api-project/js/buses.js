import { DOMSelect } from './dom';
import {xpathDom} from './dom';

// fetch api
const proxy = 'https://corsproxy.io/?'; // ik we werent supposed to use cors apis but i really wanted to make this project
const routesApi = 'https://bustime.mta.info/routes/';

// all buses list; html webpage parsing bc i couldnt find api
async function getOptions(){
    try{
        const response = await fetch(proxy+routesApi); // fetch site
        const data = await response.text();
        fetchToHtml(data);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
    } catch (error){
        console.log(error, "Error Fetching Buses");
    }
}
getOptions();

function fetchToHtml(data){
    const parser = new DOMParser();
        const list = parser.parseFromString(data, "text/html");
        const busList = list.querySelectorAll('ul.routeList li'); // parse fetched site
        
        busList.forEach(item => optionList(item)); // for each parsed node
        
}


// display results from options
function optionList(res){
    let list = res.querySelector('a').href.split("#", 2);
    busListName.push(res.innerText);
    busListVal.push(list[1]);
    DOMSelect.options[0].insertAdjacentHTML("beforeend", `
    <option value="${list[1]}">${res.innerText}</option>
    ` //insert bus routes in 1
    );
    DOMSelect.options[1].insertAdjacentHTML("beforeend", `
    <option value="${list[1]}">${res.innerText}</option>
    ` // 2
    ); 
}
const busListName = [];
const busListVal = [];


async function busDirection(bus, instance){ // fetch stops api
    try{
        const direction = `https://bt.mta.info/api/search?q=${bus}`;
        const response = await fetch(proxy+direction);
        const data = await response.json();
        const directions = data.searchResults.matches[0].directions;
        DOMSelect.direction[instance].innerHTML = '';
        directions.forEach(element => {
            DOMSelect.direction[instance].insertAdjacentHTML("beforeend", `
    <option value="${element.directionId}">${element.destination}</option>
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
DOMSelect.options[0].addEventListener("input", function(){
    if(DOMSelect.options[0] != ''){
    busDirection(DOMSelect.options[0].value, 0);
    }
}
);

DOMSelect.options[1].addEventListener("input", function(){
    if(DOMSelect.options[1] != ''){
    busDirection(DOMSelect.options[1].value, 1);
    }
}
);

