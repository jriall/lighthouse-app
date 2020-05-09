import {Action, createReducer, on} from '@ngrx/store';

import * as AuthActions from './actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  isLoggedIn: boolean;
  email?: string;
  name?: string;
}

const INITIAL_STATE: AuthState = {
  isLoggedIn: false,
};

const authReducer = createReducer(
    INITIAL_STATE,
    on(AuthActions.login),
    on(AuthActions.loginSuccess, (_, authState) => ({...authState})),
    on(AuthActions.logout),
    on(AuthActions.logoutSuccess, () => ({...INITIAL_STATE})),
);

export function reducer(state: AuthState, action: Action) {
  return authReducer(state, action);
}