import { NgModule } from '@angular/core';
import { SigninComponent } from './signin.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared';
import { MatButtonModule } from '@angular/material';

export const ROUTES: Routes = [
  {path: '', component: SigninComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule,
  ],
  providers: [],
  declarations: [SigninComponent]
})
export class SigninModule {
}
