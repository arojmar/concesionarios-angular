import { Component, OnInit, Input } from '@angular/core';
import { Car, Brand } from 'src/models';
import { IdValue } from 'src/models/id-value';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  @Input() car: Car = new Car();
  @Input() brands: IdValue[]  = [];
  branded = Brand;

  constructor() {

  }

  ngOnInit(): void {
    this.brands = this.loadBrands();
  }

  saveForm(): void {
    console.table(this.car);
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
