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

// display results from api
function optionList(res){
    DOMSelect.res.insertAdjacentHTML("afterbegin", `
    <option value="${res.stops.id}">${res.stops.name}</option>
    `
    ); // dont res.stops this should be applied in foreach
}