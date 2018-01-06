import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../shared/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
              private router: Router) {
  }

  canActivate(): boolean {
    if (this.auth.authenticated) {
      return true;
    } else {
      localStorage.removeItem('access_token');
      this.router.navigateByUrl('/signin');
      return false;
    }
  }
}
