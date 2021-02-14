const start = document.getElementById('start');
start.addEventListener('click', function() {
    if (start.getAttribute('class') == 'button-on'){
        start.setAttribute('class','button-off');
        start.textContent = 'STOP';
    } else {
        start.setAttribute('class','button-on')
        start.textContent = 'START';
    }
        
});

const pomo1 = document.getElementById('pomo1');
const pomo2 = document.getElementById('pomo2');
const pomo3 = document.getElementById('pomo3');
const pomo4 = document.getElementById('pomo4');
pomo1.addEventListener('click', function() {
        whitePomo(pomo2);
        whitePomo(pomo3);
        whitePomo(pomo4);
});

pomo2.addEventListener('click', function() {
    if (pomo2.getAttribute('alt')=='yes') {
        whitePomo(pomo3);
        whitePomo(pomo4);
    } else {
        colorPomo(pomo1);
        colorPomo(pomo2);
    }
});

pomo3.addEventListener('click', function() {
    if (pomo3.getAttribute('alt')=='yes') {
        whitePomo(pomo4);
    } else {
        colorPomo(pomo1);
        colorPomo(pomo2);
        colorPomo(pomo3);
    }
});
pomo4.addEventListener('click', function() {
        colorPomo(pomo1);
        colorPomo(pomo2);
        colorPomo(pomo3);
        colorPomo(pomo4);
});

function colorPomo(pomo) {
    pomo.setAttribute('alt','yes');
    pomo.setAttribute('src','./assets/tomato_color.svg');
        
}

function whitePomo(pomo) {
    pomo.setAttribute('alt','no');
    pomo.setAttribute('src','./assets/tomato_white.svg')
}