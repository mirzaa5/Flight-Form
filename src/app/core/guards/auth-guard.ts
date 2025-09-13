import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take, switchMap, filter } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  
  // Wait for auth to be initialized, then check user state
  return auth.authInitialized$.pipe(
    filter(initialized => initialized),
    take(1),
    switchMap(() => auth.currentUser$),
    take(1),
    map(user => {
      if (user) {
        return true;
      } else {
        router.navigateByUrl('/login');
        return false;
      }
    })
  );
};
