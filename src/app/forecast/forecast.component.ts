import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from '../models/Forecast';
import {environment} from '../../environments/environment';
import {ForecastService} from '../services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

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
