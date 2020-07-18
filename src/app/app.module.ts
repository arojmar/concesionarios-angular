import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarDetailComponent } from './car/car-detail/car-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarFormComponent } from './car-form/car-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarDetailComponent,
    CarFormComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
