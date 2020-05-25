import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {ApplicationRoute} from 'frontend/shared/routes';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {selectIsUserAdmin} from '../auth/selectors';

@Injectable({providedIn: 'root'})
export class AdminGuard implements CanActivate {
  constructor(
      private readonly store: Store<{}>, private readonly router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsUserAdmin).pipe(map((isAdmin) => {
      if (isAdmin) {
        return true;
      } else {
        this.router.navigate([ApplicationRoute.SITE_LIST]);
        return false;
      }
    }));
  }
}
