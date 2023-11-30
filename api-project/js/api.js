// fetch api

/* const url = `https://bustime.mta.info/api/stops-on-route-for-direction?routeId=MTA+NYCT_B1&directionId=1`;
const headers = {
            "Sec-Fetch-Site": "cross-site",
            "Sec-Fetch-Mode": "navigate"
        };
async function getStops(url){
    try{
        const response = await fetch(url, {
            "headers": {
              "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*;q=0.8,application/signed-exchange;v=b3;q=0.7",
              "accept-language": "en-US,en;q=0.9",
              "cache-control": "max-age=0",
              "sec-ch-ua": "\"Microsoft Edge\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "navigate",
              "sec-fetch-site": "cross-site",
              "sec-fetch-user": "?1",
              "upgrade-insecure-requests": "1"
            },
            "method": "GET",
            "mode": "cors",
          });
        const data = await response.json();
        console.log(response);
        console.log(data);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
    } catch (error){
        console.log(error, "API Error");
    }
}
getStops(url); */

const url = `https://search.kkmh.com/search/complex?q=KPI`;

async function getApi(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(response);
        console.log(data);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
    } catch (error){
        console.log(error, "API Error");
    }
}
getApi(url);