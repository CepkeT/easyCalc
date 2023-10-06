import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponentComponent } from './calculator-component.component';

describe('CalculatorComponentComponent', () => {
  let component: CalculatorComponentComponent;
  let fixture: ComponentFixture<CalculatorComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponentComponent]
    });
    fixture = TestBed.createComponent(CalculatorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
