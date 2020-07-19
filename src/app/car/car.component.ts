import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Car, Brand } from 'src/models';
import { faPlusCircle, faMinusCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  faInfoCircle = faInfoCircle;
  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;
  color: any;
  @Input() car: Car;
  brand = Brand;

  @Output() infoCar = new EventEmitter<string>(false);

  constructor() {}

  ngOnInit(): void {}

  addStock(): void {
    this.car.stock++;
  }

  removeStock(): void {
    this.car.stock > 0 ? this.car.stock-- : 0;
  }

  showInfoCard(): void {
    this.infoCar.emit(
      `El ${this.car.brand} ${this.car.model} del año ${this.car.year} tiene ${this.car.stock} unidades en stock`
    );
  }

  alertRunningOutStock(): string {
    return this.car.stock === 1 ? 'red' : 'black';
  }

  // changeColor(color: string): void{
  //   this.color = {'border-color': color, color, 'border-width': '5px'}
  // }
}
