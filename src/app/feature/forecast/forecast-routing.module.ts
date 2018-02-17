import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/guard/auth.guard';
import { ForecastDetailsResolver } from '@app/feature/forecast/forecast-details/forecast-details.resolver';
import { ForecastDetailsComponent } from '@app/feature/forecast/forecast-details/forecast-details.component';
import { ForecastComponent } from '@app/feature/forecast/forecast.component';
import { ForecastListComponent } from '@app/feature/forecast/forecast-list/forecast-list.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: ForecastComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ForecastListComponent,
        canActivate: [AuthGuard]
      },
      {
        component: ForecastDetailsComponent,
        path: ':id',
        canActivate: [AuthGuard],
        resolve: {
          forecast: ForecastDetailsResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ForecastRoutingModule {
}
