
const DOMSelect = {
    body: xpathDom('//body'),
    res: xpathDom('//*[@class="result"]'),
    options: [xpathDom('//select[@id="buses1"]'),xpathDom('//select[@id="buses2"]')],
    direction: [xpathDom('//*[@id="direction1"]'), xpathDom('//*[@id="direction2"]')],
    stops: [xpathDom('//*[@id="stops1"]'), xpathDom('//*[@id="stops2"]')],
    timeRes: [xpathDom('//*[@id="time1"]'), xpathDom('//*[@id="time2"]')],
    submitBus: xpathDom('//*[@id="busSubmit"]'),
    themer: xpathDom('//input[@type="checkbox"]'),
    refresh: xpathDom('//input[@class="refresh"]'),
    filterbtn: [document.querySelectorAll('.busselect1 details .filter button'), document.querySelectorAll('.busselect2 details .filter button')],
  };

  function xpathDom(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }


// xpathDom('')

export {xpathDom};
export {DOMSelect};
