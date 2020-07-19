import { Component } from '@angular/core';
import { Car, Brand } from '../models/index';
import { IdValue } from '../models/id-value';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cars: Car[] = [];
  brands: IdValue[] = [];
  // branded = Brand;

  constructor() {
    this.initListCars();
    // this.brands = this.loadBrands();
  }

  initListCars(): void {
    this.cars.push({
      model: 'Model 3',
      brand: Brand.Tesla,
      year: '2019',
      stock: 2,
      visible: true
    });

    this.cars.push({
      model: 'F50',
      brand: Brand.Ferrari,
      year: '2015',
      stock: 1,
      visible: true
    });

    this.cars.push({
      model: 'GLA',
      brand: Brand.Mercedes,
      year: '2013',
      stock: 7,
      visible: true
    });

    this.cars.push({
      model: 'Serie3',
      brand: Brand.BMW,
      year: '2017',
      stock: 1,
      visible: true
    });

    this.cars.push({
      model: 'A4',
      brand: Brand.Audi,
      year: '2018',
      stock: 3,
      visible: true
    });

    this.cars.push({
      model: 'Serie 4',
      brand: Brand.BMW,
      year: '2019',
      stock: 3,
      visible: true
    });

    this.cars.push({
      model: 'C220',
      brand: Brand.Mercedes,
      year: '2019',
      stock: 5,
      visible: true
    });

    this.cars.push({
      model: 'A5',
      brand: Brand.Audi,
      year: '2018',
      stock: 6,
      visible: false
    });
  }

  // loadBrands(): IdValue[] {

  //   const result: IdValue[] = [];

  //   result.push({ id: this.branded.Audi, value: 'Audi' });
  //   result.push({ id: this.branded.BMW, value: 'BMW' });
  //   result.push({ id: this.branded.Ferrari, value: 'Ferrari'});
  //   result.push({ id: this.branded.Mercedes, value: 'Mercedes'});
  //   result.push({ id: this.branded.Tesla, value: 'Tesla'});

  //   return result;
  // }


  showCar(car: Car): void {
    car.visible = !car.visible;
  }

  setColorBrand(car: Car): string {
    const brandColor: Brand = car.brand;
    let borderColor = null;
    switch (brandColor){
      case Brand.BMW:
        borderColor = 'blue';
        break;
      case Brand.Audi:
        borderColor = 'gold';
        break;
      case Brand.Mercedes:
        borderColor = 'dimgrey';
        break;
      case Brand.Tesla:
        borderColor = 'red';
        break;
      default:
        borderColor = 'green';
        break;
    }
    return borderColor = car.visible ? borderColor : 'transparent';
  }

  showInfoCar(message: string): void{
    alert(message);
  }

  saveCar(car: Car): void {
    this.cars.push(car);
  }

}
