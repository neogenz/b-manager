import {Injectable} from '@angular/core';
import {Forecast} from '../models/Forecast';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {MovementType} from '../enum/MovementType';
import {environment} from '../../environments/environment';

@Injectable()
export class ForecastService {

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Forecast[]> {
    return this.httpClient.get<Forecast[]>(`${environment.backend}/me/provisionalPlans`);
  }

  public getOneBy(id: string): Observable<Forecast> {
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
