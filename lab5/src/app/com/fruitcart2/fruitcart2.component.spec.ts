import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fruitcart2Component } from './fruitcart2.component';

describe('Fruitcart2Component', () => {
  let component: Fruitcart2Component;
  let fixture: ComponentFixture<Fruitcart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fruitcart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fruitcart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
