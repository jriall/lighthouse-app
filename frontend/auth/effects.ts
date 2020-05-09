import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';

import * as AuthActions from './actions';
import {AuthService} from './auth_service';
import {AuthState} from './reducers';

@Injectable({providedIn: 'root'})
export class AuthEffects {
  constructor(
      private readonly action$: Actions,
      private readonly authService: AuthService,
  ) {}

  readonly login$ = createEffect(() => {
    return this.action$.pipe(
        ofType(AuthActions.login),
        mergeMap(async () => {
          const user = await this.authService.getUser();
          const name = user.getBasicProfile().getName();
          const email = user.getBasicProfile().getEmail();
          const authState = {name, email, isLoggedIn: true} as AuthState;
          return AuthActions.loginSuccess(authState);
        }),
        // Consider showing error message to the user on error, though the main
        // category of error is the user closing the Google login popup, in
        // which case we can silently catch the Error returned.
        catchError(() => EMPTY),
    );
  });

  readonly logout$ = createEffect(() => {
    return this.action$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this.authService.logout();
        }),
        map(() => AuthActions.logoutSuccess()),
    );
  });
}
