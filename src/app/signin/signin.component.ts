import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs/add/operator/first';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

    public email: FormControl = new FormControl('', [Validators.required, Validators.email]);
    public hide = true;
    public password: FormControl = new FormControl('', [Validators.required]);

    constructor(private httpClient: HttpClient, jwtHelperService: JwtHelperService, private authService: AuthService) {
    }

    ngOnInit() {
    }

    public getErrorMessage(): string {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }

    public signin(): void {
        this.authService.signin(this.email.value, this.password.value)
            .first()
            .subscribe((signinResponse) => {

            });
    }
}
