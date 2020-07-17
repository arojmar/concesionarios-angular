import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  @Input() key: string;
  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
