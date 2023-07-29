function atualizaSegundos(segundos) {
    const data = new Date(segundos * 1000);
    data.setSeconds(segundos);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

console.log(atualizaSegundos(1))

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function inciRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = atualizaSegundos(segundos); 
    }, 1000);
}

iniciar.addEventListener('click', function(event){
    clearInterval(timer)
    inciRelogio();
});

pausar.addEventListener('click', function(event){
    clearInterval(timer);
});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    segundos= 0;
});

