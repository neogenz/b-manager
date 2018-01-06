import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { AuthService } from "./auth.service";

export const ROUTES: Routes = [
    {path: '', component: SigninComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        CommonModule,
        MatIconModule,
        MatButtonModule,
        HttpClientModule,
        FormsModule,
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [SigninComponent, AuthService]
})
export class SigninModule {
}
