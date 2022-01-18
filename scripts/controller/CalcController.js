class CalcController {

    constructor(){

        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    initialize(){

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "1998";
        dateEl.innerHTML = "17/01/2022";
        timeEl.innerHTML = "15:00"
    }

    get displayCalc(){
        return this._displayCalc;
    }
     
    set displayCalc(value){
        this._displayCalc = value;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(date){
        this._currentDate = date;
    }
}