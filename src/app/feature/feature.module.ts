import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from '@app/feature/feature-routing.module';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    FeatureRoutingModule
  ],
  declarations: []
})
export class FeatureModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: FeatureModule,
  //     providers: [ForecastService]
  //   };
  // }
}
