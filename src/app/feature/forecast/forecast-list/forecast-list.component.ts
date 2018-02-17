import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import { Router } from '@angular/router';
import { ForecastService } from '@app/feature/forecast/services/forecast.service';
import { Forecast } from '@app/feature/forecast/models/Forecast';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss']
})
export class ForecastListComponent implements OnInit {

  public $forecasts: Observable<Forecast[]>;

  constructor(private forecastService: ForecastService, private router: Router) {
  }

  public ngOnInit() {
    this.$forecasts = this.forecastService.getAll$();
  }

  public seeDetailsBy(id: string): void {
    this.router.navigate([`forecast`, id]);
  }
}
