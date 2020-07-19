import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car, Brand } from 'src/models';
import { IdValue } from 'src/models/id-value';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-form-reactive',
  templateUrl: './car-form-reactive.component.html',
  styleUrls: ['./car-form-reactive.component.scss']
})
export class CarFormReactiveComponent implements OnInit {
  @Input() car: Car = new Car();
  @Input() brands: IdValue[]  = [];
  branded = Brand;
  carFormReactive: FormGroup;

  @Output() carSaved = new EventEmitter<Car>(false);

  constructor(formBuilder: FormBuilder) {

    this.carFormReactive = formBuilder.group({
      model: ['', Validators.required],
      brand: ['', Validators.required],
      year: ['01-01-1970'],
      stock: [0, Validators.required],
      visible: [true]
    });
  }

  ngOnInit(): void {
    this.brands = this.loadBrands();
  }

  saveForm(formValue: any): void {
    console.table(formValue);
    this.carSaved.emit(formValue);
  }

  loadBrands(): IdValue[] {

    const result: IdValue[] = [];

    result.push({ id: this.branded.Audi, value: 'Audi' });
    result.push({ id: this.branded.BMW, value: 'BMW' });
    result.push({ id: this.branded.Ferrari, value: 'Ferrari'});
    result.push({ id: this.branded.Mercedes, value: 'Mercedes'});
    result.push({ id: this.branded.Tesla, value: 'Tesla'});

    return result;
  }
}
