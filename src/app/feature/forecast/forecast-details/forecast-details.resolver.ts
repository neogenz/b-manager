import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import { ForecastService } from '@app/feature/forecast/services/forecast.service';
import { Forecast } from '@app/feature/forecast/models/Forecast';

@Injectable()
export class ForecastDetailsResolver implements Resolve<Forecast> {
  constructor(private forecastService: ForecastService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Forecast> {
    const id: string = route.paramMap.get('id');
    return this.forecastService
      .getOneBy$(id)
      .first()
      .map((forecast) => {
        if (forecast) {
          return forecast;
        } else { // id not found
          this.router.navigate(['/forecast']);
          return null;
        }
      });
  }
}
