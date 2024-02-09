import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login/login.service';

export const authguardGuard: CanActivateFn = (route, state) => {
  return inject(LoginService).isloggedin
};
