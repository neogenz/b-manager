import { NgModule } from '@angular/core';
import { ForecastService } from '@app/feature/forecast/services/forecast.service';
import { ForecastRoutingModule } from '@app/feature/forecast/forecast-routing.module';
import { SharedModule } from '@app/shared';
import { MatGridListModule } from '@angular/material';
import { ForecastComponent } from './forecast.component';
import { ForecastListComponent } from '@app/feature/forecast/forecast-list/forecast-list.component';
import { ForecastDetailsComponent } from '@app/feature/forecast/forecast-details/forecast-details.component';
import { MovementComponent } from '@app/feature/forecast/forecast-details/movement/movement.component';
import { ForecastPreviewComponent } from '@app/feature/forecast/forecast-list/forecast-preview/forecast-preview.component';
import { ForecastDetailsResolver } from '@app/feature/forecast/forecast-details/forecast-details.resolver';

@NgModule({
  imports: [
    ForecastRoutingModule,
    MatGridListModule,
    SharedModule
  ],
  declarations: [
    ForecastComponent,
    ForecastListComponent,
    ForecastDetailsComponent,
    MovementComponent,
    ForecastPreviewComponent
  ],
  providers: [ForecastService, ForecastDetailsResolver]
})
export class ForecastModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: ForecastModule,
  //     providers: [ForecastService]
  //   };
  // }
}
