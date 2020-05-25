import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from 'frontend/app/store';

import {AUTH_FEATURE_KEY, AuthState} from './reducers';

const selectAuthFeature =
    createFeatureSelector<AppState, AuthState>(AUTH_FEATURE_KEY);

export const selectIsLoggedIn =
    createSelector(selectAuthFeature, (state: AuthState) => state.isLoggedIn);

export interface User {
  email: string;
  name: string;
  is_admin: boolean;
}

export const selectLoggedInUser =
    createSelector(selectAuthFeature, (state: AuthState) => {
      return {
        email: state.email,
        name: state.name,
        is_admin: Boolean(state.is_admin),
      } as User;
    });

export const selectAccessToken =
    createSelector(selectAuthFeature, (state: AuthState) => state.accessToken);

export const selectIsUserAdmin =
    createSelector(selectAuthFeature, ({is_admin}) => is_admin);
