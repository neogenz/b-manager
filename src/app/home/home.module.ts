import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { CommonModule } from '@angular/common';

export const ROUTES: Routes = [{path: '', component: HomeComponent}];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        MatButtonModule,
        MatCardModule,
        CommonModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule {
}
