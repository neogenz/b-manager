import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@app/core';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200', 'budgetmanager.mdesogus.com']
      }
    }),
    // FeatureModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class BManagerApp {
}

export function tokenGetter(): any {
  return JSON.parse(localStorage.getItem('access_token'));
}
