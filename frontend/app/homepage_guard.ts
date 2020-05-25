import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {ApplicationRoute} from 'frontend/shared/routes';
import {Observable} from 'rxjs';
import {mapTo, tap} from 'rxjs/operators';

import {selectIsLoggedIn} from '../auth/selectors';

@Injectable({providedIn: 'root'})
export class HomepageGuard implements CanActivate {
  constructor(
      private readonly store: Store<{}>, private readonly router: Router) {}

  canActivate(): Observable<false> {
    return this.store.select(selectIsLoggedIn)
        .pipe(
            tap((isLoggedIn) => {
              if (isLoggedIn) {
                this.router.navigate([ApplicationRoute.SITE_LIST]);
              } else {
                this.router.navigate([ApplicationRoute.LOGIN]);
              }
            }),
            mapTo(false));
  }
}
