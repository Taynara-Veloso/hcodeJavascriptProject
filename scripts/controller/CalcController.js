class CalcController {

    constructor(){
        
        this._operation = [];
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){

        this.setDisplayDateTime();

        setInterval(() => {

            this.setDisplayDateTime();

        }, 1000);

        /* como pegar um Id desconhecido usando variavel.

        let interval = setInterval(() => {
            this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        }, 1000);

        função que para a função principal depois de 10 segundo.

        setTimeout(()=>{
            clearInterval(interval);
        }, 10000);*/
    }
    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        })
    }

    clearAll(){
        this._operation = [];
    }

    clearEntry(){
        this._operation.pop();
    }
    addOperation(value){
        this._operation.push(value);
        console.log(this._operation)
    }

    setError(){
        this.displayCalc = "Error"
    }

    execBtn(value){

    

        switch(value){

            case 'ac':
                this.clearAll();
                break;   
            
            case 'ce':
                this.clearEntry();
                break;

            case 'porcento':
                this.clearAll();
                break;    
            case 'divisao':
                this.clearAll();
                break;
            case 'multiplicacao':
                this.clearAll();
                break;
            case 'subtracao':
                this.clearAll();
                break;
            case 'soma':
                this.clearAll();
                break;
            case 'igual':
                this.clearAll();
                break;        
            case 'ponto':
                this.clearAll();
                break;
            case '0':            
            case '1':            
            case '2':            
            case '3':            
            case '4':            
            case '5':            
            case '6':            
            case '7':            
            case '8':            
            case '9':
                this.addOperation(parseInt(value));    
                break;        
            default:
                this.setError();
                break;
        }        
    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g")
        
        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, 'click drag', e => {

                let textBtn = btn.className.baseVal.replace("btn-","");

                this.execBtn(textBtn);

            });
            
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{

                btn.style.cursor = "pointer";

            });

        });
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }
    
    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(time){
        return this._timeEl.innerHTML = time;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(date){
        return this._dateEl.innerHTML = date;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }
     
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }  

    set currentDate(date){
        this._currentDate = date;
    }
}