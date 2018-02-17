import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/guard/auth.guard';
import { HomeComponent } from '@app/feature/home/home.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home', loadChildren: 'app/feature/home/home.module#HomeModule'
  },
  {
    path: 'signin', loadChildren: 'app/feature/signin/signin.module#SigninModule'
  },
  {
    path: 'forecast',
    loadChildren: 'app/feature/forecast/forecast.module#ForecastModule',
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
