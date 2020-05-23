import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {ApplicationRoute} from 'frontend/shared/routes';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {selectIsLoggedIn} from './selectors';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
      private readonly store: Store<{}>, private readonly router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsLoggedIn).pipe(map((isLoggedIn) => {
      if (isLoggedIn) {
        return true;
      } else {
        this.router.navigate([ApplicationRoute.LOGIN]);
        return false;
      }
    }));
  }
}
