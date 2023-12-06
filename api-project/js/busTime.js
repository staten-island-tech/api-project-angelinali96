import { DOMSelect } from './dom';
import './buses';
import './stops';

function insertTime(value, instance){
    let val = value.replace('MTA_', '');
    const timeUrl = `https://bustime.mta.info/m/index?q=${val}`;
}
/* DOMSelect.stops[0].addEventListener("input",

); */