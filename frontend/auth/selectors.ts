import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from 'frontend/app/store';

import {AUTH_FEATURE_KEY, AuthState} from './reducers';

const selectAuthFeature =
    createFeatureSelector<AppState, AuthState>(AUTH_FEATURE_KEY);

export const selectIsLoggedIn =
    createSelector(selectAuthFeature, (state: AuthState) => state.isLoggedIn);

export const selectLoggedInUser =
    createSelector(selectAuthFeature, (state: AuthState) => {
      return {
        email: state.email,
        name: state.name,
      };
    });

export const selectAccessToken =
    createSelector(selectAuthFeature, (state: AuthState) => state.accessToken);
