//Promises - funções "prometidas"
//Métodos úteis para promises

function rand(min, max) {
    min *=1000; 
    max *= 1000
    return Math.floor(Math.random() * (max-min) + min )
}

function esperaAi(msg, tempo) {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
        if(typeof msg !== 'string'){ 
        reject('CAI NO ERRO')
        return;
    }
        resolve(msg.toUpperCase() + '- Passei na promise');
        return
        } ,tempo)
    })
}
/*
esperaAi('Fase 1', rand())
    .then(valor => {
        console.log(valor)
        return esperaAi('Fase 2', rand())
    }) 
    .then(fase => {
        console.log(fase)
        return esperaAi('Fase 3', rand())
    })
    .then(fase => {
        console.log(fase)
        return fase
    })
    .catch(e => console.log(e))
    */
async function executa() {
    try{
    const fase1 = await esperaAi('Fase 1', rand(1,2))
   console.log(fase1)
   const fase2 = await esperaAi('Fase 2', rand(1,2))
   console.log(fase2)
   const fase3 = await esperaAi('Fase 3', rand(1,2))
   console.log(fase3)
   console.log('Terminamos a fase 3')
    } catch(e) {
        console.log(e)
    }
   
}
executa()


//Promise.all / Promise.race / Promise.resolve / Promise.reject
