import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/first';
import { ForecastService } from '@app/feature/forecast/services/forecast.service';
import { Forecast } from '@app/feature/forecast/models/Forecast';

@Component({
  selector: 'app-forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.scss']
})
export class ForecastDetailsComponent implements OnInit {

  public forecast: Forecast = null;
  public cols: number = 4;


  constructor(private activatedRoute: ActivatedRoute, private forecasst: ForecastService) {
  }

  public ngOnInit(): void {
    this.activatedRoute.data
      .first()
      .subscribe((data: { forecast: Forecast }) => {
        this.forecast = data.forecast;
      });
  }

  public onResize(event): void {
    const element = event.target.innerWidth;

    if (element < 950) {
      this.cols = 3;
    }

    if (element > 950) {
      this.cols = 4;
    }

    if (element < 750) {
      this.cols = 1;
    }
  }

}
