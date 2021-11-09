function relogio() {
    function getTimeForSeconds (segundos) {
        const data = new Date(segundos * 1000);
        console.log(data)
        return data.toLocaleTimeString('pt-BR', {
          hour12: false,
          timeZone: 'UTC',
        });
    }
    const relogio = document.querySelector('.relogio')
    let segundos = 0;
    let timer; 
    
    function iniciaRelogio () {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeForSeconds(segundos);
        }, 1000)
    }
    
    document.addEventListener('click', function(e) {
        const el = e.target;
        
        if (el.classList.contains('zerar')) {
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0;
        relogio.classList.remove('pausado')
        }
        
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            iniciaRelogio() 
            }
        
        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado')
            clearInterval(timer)
        }
    });
    
}

relogio()