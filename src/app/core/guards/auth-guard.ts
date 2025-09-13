import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take, filter, switchMap, skip } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  
  // Wait for auth to be initialized, then check currentUser$ observable
  return auth.initialized$.pipe(
    filter(initialized => initialized),
    take(1),
    switchMap(() => auth.currentUser$.pipe(take(1))),
    map(user => {
      if (user !== null) return true;
      router.navigateByUrl('/login');
      return false;
    })
  );
};
