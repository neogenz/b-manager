import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForecastComponent} from './forecast.component';
import {MatCardModule} from '@angular/material';
import {ForecastService} from '../services/forecast.service';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [ForecastComponent],
  exports: [ForecastComponent],
  providers: [ForecastService]
})
export class ForecastModule {
}
