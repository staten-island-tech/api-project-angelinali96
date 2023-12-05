import '../css/style.css';
import '../css/variables.css';
import './buses';
import './stops';
import { DOMSelect } from './dom';

DOMSelect.themer.addEventListener("click", function(){ // theme
    if(DOMSelect.themer.checked === true){
        DOMSelect.body.className = "rainbow";
    }else if(DOMSelect.themer.checked === false){
        DOMSelect.body.className = "dark";
    }
}
);



/* function xpathE(expression){ // idk if this works but i prefer xpath over domselectors
    const xpath = expression;
    const evaluator = new XPathEvaluator();
    const exp = evaluator.createExpression(xpath);
    const result = exp.evaluate(document, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
    return result;
}
console.log(xpathE('//h1')); */
//API PROJECT
// bus api;  double screen
// https://bustime.mta.info/api/stops-on-route-for-direction?routeId=MTA+NYCT_B8&directionId=1
// fetch id and fill https://bustime.mta.info/m/index?q= id
// route list https://bustime.mta.info/m/routes/
