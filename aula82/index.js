//Herança com classes
//Herança =  Uma classe é capaz de herdar métodos e atributos da sua classe "pai"

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já ligado`)
            return
        }
        this.ligado = true;
    }
    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já desligado`)
            return
        }

        this.ligado = false;
    }
}
//Útiliza-se extends para indicar que uma classe está herdando a outra
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        //Super -  chama o constructor da superplasse (classe pai) e importa todo o código já feito
        super(nome)
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome,temWifi){
        super(nome)
        this.temWifi = temWifi;
    }

    ligar()  {
        console.log('Tu alterou o método doidao')
    }
}

const s1 = new Smartphone('Xiomi', 'Preto', 'Note 8')
s1.ligar()
console.log(s1)

const t1 = new Tablet ("Tablet '-'", true)
t1.ligar()
console.log(t1)
