import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ApplicationRoute} from 'frontend/shared/routes';
import {EMPTY, of as observableOf} from 'rxjs';
import {catchError, exhaustMap, map, mergeMap, switchMap, tap} from 'rxjs/operators';

import * as AuthActions from './actions';
import {AuthService} from './auth_service';
import {AuthState} from './reducers';

@Injectable({providedIn: 'root'})
export class AuthEffects {
  constructor(
      private readonly action$: Actions,
      private readonly authService: AuthService,
      private readonly router: Router,
  ) {}

  readonly login$ = createEffect(() => {
    return this.action$.pipe(
        ofType(AuthActions.login),
        exhaustMap(async () => {
          await this.authService.login();
          return AuthActions.getLoggedInUser({redirect: true})
        }),
        // Consider showing error message to the user on error, though the main
        // category of error is the user closing the Google login popup, in
        // which case we can silently catch the Error returned.
        catchError(() => EMPTY),
    );
  });

  // TODO(jriall): Improve awkward logic for handling redirect.
  readonly getLoggedInUser$ = createEffect(() => {
    return this.action$.pipe(
        ofType(AuthActions.getLoggedInUser),
        exhaustMap(async ({redirect}) => {
          const user = await this.authService.getUser();
          const name = user.getBasicProfile().getName();
          const email = user.getBasicProfile().getEmail();
          const accessToken = user.getAuthResponse().id_token;
          const authState: AuthState = {
            name,
            email,
            isLoggedIn: true,
            accessToken,
          };
          return {authState, redirect};
        }),
        tap(({authState, redirect}) => {
          if (redirect) {
            this.router.navigate([ApplicationRoute.SITE_LIST]);
          }
        }),
        mergeMap(
            ({authState}) =>
                [AuthActions.setLoggedInUser(authState),
                 AuthActions.checkIfUserIsAdmin({email: authState.email})]),
    );
  });

  readonly checkIfUserIsAdmin$ = createEffect(() => {
    return this.action$.pipe(
        ofType(AuthActions.checkIfUserIsAdmin),
        switchMap(({email}) => this.authService.checkIfUserIsAdmin(email)),
        map((user) => user.is_admin), catchError(() => observableOf(false)),
        map((is_admin) => AuthActions.checkIfUserIsAdminSuccess({is_admin})));
  })

  readonly logout$ = createEffect(() => {
    return this.action$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this.authService.logout();
          this.router.navigate([ApplicationRoute.LOGIN]);
        }),
        map(() => AuthActions.logoutSuccess()),
    );
  });
}
