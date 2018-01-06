import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {SigninResponse} from '../models/SigninResponse';
import {JwtHelperService} from '@auth0/angular-jwt';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {

  public loggedIn = false;
  private loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  constructor(private httpClient: HttpClient, private jwtHelperService: JwtHelperService) {
  }

  public get authenticated(): boolean {
    const token: string = this.jwtHelperService.tokenGetter();
    if (!token) {
      return false;
    }
    return !this.jwtHelperService.isTokenExpired(token);
    // Check if current date is greater than expiration
    // const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // return Date.now() < expiresAt;
  }

  public signin(email: string, password: string): Observable<SigninResponse> {
    return this.httpClient.post<SigninResponse>(`${environment.backend}/signin`,
      {
        email: email,
        password: password
      })
      .map((response) => {
        this.setSession(response.token);
        return response;
      });
  }

  private setSession(token: string): void {
    const expTime = 86400 * 1000 + Date.now();
    localStorage.setItem('access_token', JSON.stringify(token));
    localStorage.setItem('expires_at', JSON.stringify(expTime));
  }

  private setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }
}
