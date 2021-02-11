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