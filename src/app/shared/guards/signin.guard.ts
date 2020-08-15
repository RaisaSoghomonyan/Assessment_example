import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninGuard implements CanActivate{
  constructor(private router: Router, private auth: AuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const isLogin = this.auth.isLogin;
    if (isLogin) {
      // authorised so return true
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;


  }

}
