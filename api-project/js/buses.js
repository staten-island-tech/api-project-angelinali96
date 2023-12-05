import { DOMSelect } from './dom';

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
    DOMSelect.options1.insertAdjacentHTML("afterbegin", `
    <option value="${list[1]}">${res.innerText}</option>
    ` //insert bus routes in 1
    );
    DOMSelect.options2.insertAdjacentHTML("afterbegin", `
    <option value="${list[1]}">${res.innerText}</option>
    ` // 2
    ); 
}
