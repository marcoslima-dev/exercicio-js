//Função construtora - Constroi objetos
//Função factory - Fabrica objetos

//Construtora - sempre iniciar o nome da função com letra maiúscula

function Pessoa(nome, sobrenome) {
    //Variáveis privadas, não estão disponíveis fora da function
    const ID = 123456;
    
    this.nome =  nome;
    this.sobrenome = sobrenome;
    
    this.metodo = ()=> {
        console.log(this.nome + ':sou um método')
    };
}

const p1 = new Pessoa('Marcos', 'Lima');
p1.metodo()