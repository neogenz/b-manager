import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {JwtModule} from '@auth0/angular-jwt';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatRadioModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {AuthGuard} from './guard/auth.guard';
import { ForecastDetailsComponent } from './forecast-details/forecast-details.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return JSON.parse(localStorage.getItem('access_token'));
        },
        whitelistedDomains: ['localhost:4200', 'budgetmanager.mdesogus.com']
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class BManagerApp {
}
