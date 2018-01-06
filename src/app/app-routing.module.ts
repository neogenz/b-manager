import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
  {path: 'signin', loadChildren: 'app/signin/signin.module#SigninModule'},
  {path: 'previsions', loadChildren: 'app/forecast-list/forecast-list.module#ForecastListModule', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
