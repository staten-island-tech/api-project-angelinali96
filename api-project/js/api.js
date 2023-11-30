// fetch api
const proxy = 'https://corsproxy.io/?';
const url = `https://bustime.mta.info/api/stops-on-route-for-direction?routeId=MTA+NYCT_B1&directionId=1`;


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
