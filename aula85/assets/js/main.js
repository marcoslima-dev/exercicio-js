class ValidaFormulario {
    constructor () {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const checkFields = this.checkFields()
        const checkPassword = this.passwordValid()

        if(checkFields && checkPassword) {
            alert('Formulario enviado')
            this.formulario.submit();
        }
    }
    passwordValid() {
        let valid = true;
        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')

        if(senha.value !== repetirSenha.value) {
            valid= false;
            this.createError(senha, 'As senhas precisam ser iguais')
            this.createError(repetirSenha, 'As senhas precisam ser iguais')
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.createError(senha, 'A senha precisa estar entre 6 e 12 caraceteres')
        }

        return valid;
    }

    checkFields() {
        let valid = true;

        

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            
            if (!campo.value) {
                this.createError(campo, `Campo "${label}" não pode estar em branco`)
                valid = false;
            }
            if(campo.classList.contains('cpf')) {
                if(!this.validaCpf(campo)) valid = false;
            }
            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }
    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true
        if(usuario.length < 3 || usuario.length > 12) {
            this.createError(campo, 'Usuário precisa ter entre 3 e 12 caraceteres')
            valid =false;
        }
        if(!usuario.match(/[a-zA-Z0-9]+/g)) {
            this.createError(campo, 'Nome de usúario precisar conter letras e/ou números')
            valid =false;
        }
        return valid
    }
    validaCpf(campo) {
        const cpf = new ValidaCpf(campo.value)

        if(!cpf.valida()) {
            this.createError(campo, 'CPF Invalido')
            return false
        }
        return true
    }

    createError(campo,msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)

    }
}

const valida = new ValidaFormulario()