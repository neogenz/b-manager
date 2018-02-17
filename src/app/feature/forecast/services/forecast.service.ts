import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { MovementType } from 'app/feature/forecast/enum/MovementType';
import { Forecast } from 'app/feature/forecast/models/Forecast';

@Injectable()
export class ForecastService {

  constructor(private httpClient: HttpClient) {
  }

  public getAll$(): Observable<Forecast[]> {
    return this.httpClient.get<Forecast[]>(`${environment.backend}/me/provisionalPlans`);
  }

  public getOneBy$(id: string): Observable<Forecast> {
    return this.httpClient.get<Forecast>(`${environment.backend}/me/provisionalPlans/${id}`);
  }

  public calculIncomingFlowFrom(forecast: Forecast, onlyActiveMovements: boolean = true): number {
    return this.calculFlowBy(forecast, onlyActiveMovements, MovementType.UP);
  }

  public calculOutcomingFlowFrom(forecast: Forecast, onlyActiveMovements: boolean = true): number {
    return this.calculFlowBy(forecast, onlyActiveMovements, MovementType.DOWN);
  }
 
  private calculFlowBy(forecast: Forecast, activeMovement: boolean = true, flowType: MovementType): number {
    const initialValue: number = 0;
    return forecast.movements
      .filter((movement) => activeMovement ? movement.active : true)
      .filter((movement) => movement.type === flowType)
      .map((movement) => movement.amount)
      .reduce((sum, amount) => sum + amount, initialValue);
  }
}
