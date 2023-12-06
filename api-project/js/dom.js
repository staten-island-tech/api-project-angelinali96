const DOMSelect = {
    body: document.querySelector('body'),
    res: document.querySelector('.result'),
    options1: document.getElementById('buses1'),
    direction1: document.getElementById('direction1'),
    direction2: document.getElementById('direction2'),
    options2: document.getElementById('buses2'),
    stops: [document.getElementById('stops1'), document.getElementById('stops2')],
    submitBus: document.getElementById('busSubmit'),
    themer: document.querySelector('input[type="checkbox"]'),
};

export {DOMSelect};
