import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFormReactiveComponent } from './car-form-reactive.component';

describe('CarFormReactiveComponent', () => {
  let component: CarFormReactiveComponent;
  let fixture: ComponentFixture<CarFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
