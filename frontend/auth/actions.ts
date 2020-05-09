import {createAction, props} from '@ngrx/store';
import {AuthState} from './reducers';

export const login = createAction('[Auth] Login');

export const loginSuccess = createAction('[Auth] Login Success');

export const getLoggedInUser = createAction('[Auth] Get logged in user');

export const setLoggedInUser =
    createAction('[Auth] Set logged in user', props<AuthState>());

export const logout = createAction('[Auth] Logout');

export const logoutSuccess = createAction('[Auth] Logout Success');
