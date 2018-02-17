import { Component, Input, OnInit } from '@angular/core';
import { ForecastService } from '@app/feature/forecast/services/forecast.service';
import { environment } from '@env/environment';
import { Forecast } from '@app/feature/forecast/models/Forecast';

@Component({
  selector: 'app-forecast-preview',
  templateUrl: './forecast-preview.component.html',
  styleUrls: ['./forecast-preview.component.scss']
})
export class ForecastPreviewComponent implements OnInit {

  public realAmount: number;
  public baseAmount: number;
  public plannedAmount: number = 0;
  public devise: string = environment.devise;

  @Input()
  public forecast: Forecast;

  constructor(private forecastService: ForecastService) {
  }

  public ngOnInit() {
    this.baseAmount = this.forecast.baseAmount;
    this.realAmount = this.calculRealAmount();
  }

  private calculRealAmount(): number {
    const baseAmount: number = this.forecast.baseAmount;
    const outcomingFlow: number = this.forecastService.calculOutcomingFlowFrom(this.forecast);
    const incomingFlow: number = this.forecastService.calculIncomingFlowFrom(this.forecast);
    return baseAmount - outcomingFlow + incomingFlow;
  }
}
