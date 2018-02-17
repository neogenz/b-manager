import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import 'rxjs/add/operator/first';
import {AuthService} from '../../core/services/authentication/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public hide = true;
  public email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  public password: FormControl = new FormControl('', [Validators.required]);

  constructor(private httpClient: HttpClient, jwtHelperService: JwtHelperService, private authService: AuthService) {
  }

  ngOnInit() {
  }

  public getErrorMessage(): string {
    return this.email.hasError('required') ? 'Veuillez saisir votre addresse email' :
      this.email.hasError('email') ? 'Veuillez saisir une addresse email valide' :
        '';
  }

  public signin(): void {
    this.authService.signin(this.email.value, this.password.value)
      .first()
      .subscribe((signinResponse) => {

      });
  }
}
