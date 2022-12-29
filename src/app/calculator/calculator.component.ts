// https://www.techiediaries.com/angular-8-tutorial-build-first-angular-calculator-app/
import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  currentNumber = '0';
  firstOperand=0;
  operator='';
  waitForSecondNumber = false;
  constructor(
    public route:Router,
  ) { }

  ngOnInit(): void {
  }

  public getNumber(v: string){
    console.log(v);
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;

    }
  }

  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }

   doCalculation(op:any , secondOp:any){
    switch (op){
      case '+':
      return this.firstOperand += secondOp; 
      case '-': 
      return this.firstOperand -= secondOp; 
      case '*': 
      return this.firstOperand *= secondOp; 
      case '/': 
      return this.firstOperand /= secondOp; 
      case '=':
      return secondOp;
    }
  }

   getOperation(op: string){
    console.log(op);

    if(this.firstOperand === 0){
      this.firstOperand = Number(this.currentNumber);

    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);

  }

  public clear(){
    this.currentNumber = '0';
    this.firstOperand = 0;
    this.operator = '';
    this.waitForSecondNumber = false;
  }

  // goOther(){
  //   this.route.navigateByUrl('calculator2')
  // }

}
