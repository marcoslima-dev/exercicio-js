//Factory Functions - Funções que retornam objetos

function criaPessoa(nome, sobrenome,a,p) {
    return {
        nome, 
        sobrenome, 
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;  
        },
        set nomeCompleto(valor) {
            valor = valor.split (' ')
            this.nome = valor.shift()
            console.log(valor)
        },
        fala(assunto) {
            return `${nome} está falando sobre ${assunto}.`;
        },
        altura:a,
        peso:p,
         get imc() {
            const indice =  this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Marcos', 'Lima', 1.6, 60);
p1.nomeCompleto = 'Gabriel Alcantara Toledo'
console.log(p1.nomeCompleto)