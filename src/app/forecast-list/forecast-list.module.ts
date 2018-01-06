import {NgModule} from '@angular/core';
import {ForecastListComponent} from './forecast-list.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ForecastService} from '../services/forecast.service';
import {ForecastModule} from '../forecast/forecast.module';
import {AuthGuard} from '../guard/auth.guard';

export const ROUTES: Routes = [
  {path: '', component: ForecastListComponent},
  {path: 'details', loadChildren: 'app/forecast-details/forecast-details.module#ForecastDetailsModule', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    ForecastModule,
    CommonModule
  ],
  declarations: [
    ForecastListComponent
  ],
  providers: [ForecastService]
})
export class ForecastListModule {

}
