import { DOMSelect } from './dom';

// fetch api
const proxy = 'https://corsproxy.io/?'; // ik we werent supposed to use cors apis but i really wanted to make this project
const url = `https://bustime.mta.info/api/stops-on-route-for-direction?routeId=MTA+NYCT_B1&directionId=1`;


async function getOptions(){
    try{
        const response = await fetch(proxy+'https://bustime.mta.info/routes/');
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
        const busList = list.querySelectorAll('ul.routeList li');
        console.log(busList);
        busList.forEach(item => optionList(item));
}

async function getApi(url){
    try{
        const response = await fetch(proxy+url);
        const data = await response.json();
        console.log(data);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
    } catch (error){
        console.log(error, "API Error");
    }
}
getApi(url);

// display results from options
function optionList(res){
    let list = res.querySelector('a').href.split("#", 2);
    DOMSelect.options.insertAdjacentHTML("afterbegin", `
    <option value="${list[1]}">${res.innerText}</option>
    `
    ); 
}