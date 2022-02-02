//Classes 

class Pessoa{
    constructor(nome,sobrenome) {
        this.nome=nome;
        this.sobrenome=sobrenome;
    }

    falar() {
        console.log(`${this.nome} esta falando: vai toma no teu cu disgraça`)
    }
}

const p1 = new Pessoa('Marcos', 'Lima');
console.log(p1.falar())