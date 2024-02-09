import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../login/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  return false
  // 
};
