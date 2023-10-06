//без eval(
/*import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.css']
})
export class CalculatorComponentComponent {
  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;
  expression: string = '';
  result: number | string = 0;
  operator: string = '';

  ngAfterViewInit() {
    this.inputRef.nativeElement.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        this.calculate();
      } else if (event.key === 'Backspace') {
        this.performCalculation();
      }
    });
  }

  appendCharacter(character: string) {
    if (character === '+' || character === '-' || character === '*' || character === '/') {
      this.operator = character;
    }
    this.expression += character;
  }

  calculate() {
    try {
      this.result = this.evaluateExpression(this.expression);
    } catch (error) {
      this.result = 'инвалид';
    }
  }

  evaluateExpression(expression: string): number | string {
    const numbers = expression.split(/[+\-*\/]/);
    const num1 = parseFloat(numbers[0]);
    const num2 = parseFloat(numbers[1]);

    switch (this.operator) {
      case '+':
        if (num1 === 2 && num2 === 2) {
          return '5 я сказал';
        } else {
          return num1 + num2;
        }
      case '-':
        return num1 - num2;
      case '*':
        if (num1 === 2 && num2 === 2) {
          return 'верь мне 5';
        } else {
          return num1 * num2;
        }
      case '/':
        if (num2 === 0) {
          return 'Животное на 0 делишь?';
        } else {
          return num1 / num2;
        }
      default:
        return 0;
    }
  }

  performCalculation() {
    this.result = this.evaluateExpression(this.expression);
    this.expression = '';
  }

  handleEnter(event: Event) {
    if ((event as KeyboardEvent).key === 'Enter') {
      this.calculate();
    }
  }
})*/
//ToDo: 1.кнопочки в картинки
// 2.убрать отдельный результат кинуть его в окошко ввода просто пониже
// 3.хз потом придумаю что-то еще

//c без eval() без кастома но лучше считает
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.css']
})
export class CalculatorComponentComponent {
  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;
  expression: string = '';
  result: number | string = 0;

  ngAfterViewInit() {
    this.inputRef.nativeElement.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        this.calculate();
      } else if (event.key === 'Backspace') {
        this.performCalculation();
      }
    });
  }

  appendCharacter(character: string) {
    this.expression += character;
  }

  calculate() {
    this.result = this.evaluateExpressionWithEval(this.expression);
  }

  evaluateExpressionWithEval(expression: string): number | string {
    try {
      return eval(expression);
    } catch (error) {
      return 'инвалид';
    }
  }

  performCalculation() {
    this.result = this.evaluateExpressionWithEval(this.expression);
    this.expression = '';
  }

  handleEnter(event: Event) {
    if ((event as KeyboardEvent).key === 'Enter') {
      this.calculate();
    }
  }
}
