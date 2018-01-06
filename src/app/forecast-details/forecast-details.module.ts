import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastDetailsComponent } from './forecast-details.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { ForecastDetailsResolver } from './forecast-details.resolver';
import { MatGridListModule } from '@angular/material';
import { MovementModule } from '../movement/movement.module';
import { FlexLayoutModule } from '@angular/flex-layout';

export const ROUTES: Routes = [
  {
    component: ForecastDetailsComponent,
    path: ':id',
    canActivate: [AuthGuard],
    resolve: {
      forecast: ForecastDetailsResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    MovementModule,
    MatGridListModule
  ],
  declarations: [ForecastDetailsComponent],
  providers: [ForecastDetailsResolver]
})
export class ForecastDetailsModule {
}
