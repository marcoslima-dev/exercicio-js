function createCalculator() {
    return {
        display: document.querySelector('.display'),
        
        
        begin() {
            this.clickButtons();
            this.enterPressed();
           
        },
        enterPressed() {
            this.document.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.runEquation();
                    console.log('wtf')
                }
            });
        },

        runEquation() {
            let = equation = this.display.value;

            try {
                equation= eval(equation);

                if (!equation) {
                    alert('Conta invalida');
                    return;
                }

                this.display.value = String(equation);
            }catch (e) {
                alert('Conta invalida');
                return;
            }
        },
        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1)
        },

        


        clickButtons() {
            document.addEventListener('click', e => {
                const el = e.target; 
                
                if (el.classList.contains('btn-num')) {
                    this.btnStopDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.deleteOne()
                }
                if (el.classList.contains('btn-eq')) {
                    this.runEquation()
                }
            }) 
        },
        btnStopDisplay(value) {
            this.display.value += value;
        }
    
    
    
    };
}

const calculator = createCalculator();
calculator.begin()