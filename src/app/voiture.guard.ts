
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const VoitureGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAdmin()) {
    return true;
  } else {
    router.navigate(['app-forbidden']);
    return false;
  }
};