//Métodos estáticos
/*Método estático -  funções que não dependem de uma variável de instância,
quando invocados executam uma função sem a dependência do conteúdo de um 
objeto ou a execução da instância de uma classe
*/

class ControleRemoto {
    constructor(TV){
        this.TV=TV;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume+=2;
    }

    diminuirVolume() {
        this.volume-=2;
    }
    
    static trocaPilha() {
        console.log('Ok, vou trocar as pilhas')
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
ControleRemoto.trocaPilha()
console.log(controle1)
