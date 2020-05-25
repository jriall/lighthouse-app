import {Action, createReducer, on} from '@ngrx/store';

import * as AuthActions from './actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  isLoggedIn: boolean;
  email?: string;
  name?: string;
  accessToken?: string;
  isAdmin?: boolean;
}

const INITIAL_STATE: AuthState = {
  isLoggedIn: false,
};

const authReducer = createReducer(
    INITIAL_STATE,
    on(AuthActions.login),
    on(AuthActions.getLoggedInUser),
    on(AuthActions.setLoggedInUser, (_, authState) => ({...authState})),
    on(AuthActions.loginSuccess),
    on(AuthActions.logout),
    on(AuthActions.logoutSuccess, () => ({...INITIAL_STATE})),
);

export function reducer(state: AuthState, action: Action) {
  return authReducer(state, action);
}
