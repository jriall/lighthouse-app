import {createAction, props} from '@ngrx/store';
import {AuthState} from './reducers';

export const login = createAction('[Auth] Login');

export const loginSuccess =
    createAction('[Auth] Login Success', props<AuthState>());

export const logout = createAction('[Auth] Logout');

export const logoutSuccess = createAction('[Auth] Logout Success');
