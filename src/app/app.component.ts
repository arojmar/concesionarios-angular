import { Component } from '@angular/core';
import { Car } from '../models/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cars: Car[] = [];

  constructor() {
    this.initListCars();
  }

  initListCars(): void {
    this.cars.push({
      model: 'Model 3',
      brand: 'Tesla',
      year: '2019',
      stock: 2,
      visible: true
    });

    this.cars.push({
      model: 'F50',
      brand: 'Ferrari',
      year: '2015',
      stock: 1,
      visible: true
    });

    this.cars.push({
      model: 'GLA',
      brand: 'Mercedes',
      year: '2013',
      stock: 7,
      visible: true
    });

    this.cars.push({
      model: 'Serie3',
      brand: 'BMW',
      year: '2017',
      stock: 1,
      visible: true
    });

    this.cars.push({
      model: 'A4',
      brand: 'Audi',
      year: '2018',
      stock: 3,
      visible: true
    });

    this.cars.push({
      model: 'Serie 4',
      brand: 'BMW',
      year: '2019',
      stock: 3,
      visible: true
    });

    this.cars.push({
      model: 'C220',
      brand: 'Mercedes',
      year: '2019',
      stock: 5,
      visible: true
    });

    this.cars.push({
      model: 'A5',
      brand: 'Audi',
      year: '2018',
      stock: 6,
      visible: false
    });
  }

  showCar(car: Car): void {
    car.visible = !car.visible;
  }

  setColorBrand(car: Car): string {
    const brandColor: string = car.brand;
    let borderColor = null;
    switch (brandColor){
      case 'BMW':
        borderColor = 'blue';
        break;
      case 'Audi':
        borderColor = 'gold';
        break;
      case 'Mercedes':
        borderColor = 'dimgrey';
        break;
      case 'Tesla':
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

}
