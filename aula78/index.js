//Polimorfismo

//Superclass
function Conta(agencia, conta,saldo) {
    this.agencia=agencia;
    this.conta=conta;
    this.saldo=saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo<=valor) {
        console.log(`Saldo insuficiente`)
        this.verSaldo()
        return
    }

    this.saldo -= valor;
    this.verSaldo()
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo()
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag.:${this.agencia}/${this.conta}` + 
    `Saldo: R$${this.saldo.toFixed(2)}`)
}

function ContaCorrente(agencia,conta,saldo,limite) {
    Conta.call(this, agencia,conta,saldo)
    this.limite  = limite;

}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente`)
        this.verSaldo()
        return
    }

    this.saldo -= valor;
    this.verSaldo()
}

const CC= new ContaCorrente(11,22,0,100)
CC.depositar(10)
CC.sacar(120)

console.log('//////////////')

function ContaPoupança(agencia,conta,saldo) {
    Conta.call(this, agencia,conta,saldo)

}
ContaPoupança.prototype = Object.create(Conta.prototype);
ContaPoupança.prototype.constructor = ContaPoupança;

const CP = new ContaPoupança(12,34,0);
CP.depositar(200)
