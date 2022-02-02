//'705.484.450.-52' 070.987.720.03
class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: true,
            enumerable: false,
            configurable: false,
            value:cpfEnviado.replace(/\D+/g, '')

        })
    }

    isSequence() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    geraNovoCpf() {
        const cpfSemDigito = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCpf.geraDigito(cpfSemDigito)
        const digito2 = ValidaCpf.geraDigito(cpfSemDigito + digito1)
        this.novoCpf = cpfSemDigito + digito1 + digito2
    }

    static geraDigito(cpfSemDigito) {
        let total = 0;
        let reverso = cpfSemDigito.length + 1;
        
        for( let stringNumerica of cpfSemDigito) {
            total += reverso * Number(stringNumerica)
            reverso --;
        }
        const digito = 11 - (total %11);

        return digito <= 9 ? digito : '0'
    }

    valida() {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.isSequence()) return false
        this.geraNovoCpf()

        return this.novoCpf === this.cpfLimpo
    }
}

//const validaCpf = new ValidaCpf('070.987.720.03')


//if(validaCpf.valida()) {
  //  console.log('Cpf Válido!')
//}else {
  //  console.log('Cpf Inválido')
//}