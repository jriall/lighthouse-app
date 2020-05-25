import {createAction, props} from '@ngrx/store';
import {AuthState} from './reducers';

export const login = createAction('[Auth] Login');

export const loginSuccess = createAction('[Auth] Login Success');

export const getLoggedInUser =
    createAction('[Auth] Get logged in user', props<{redirect: boolean}>());

export const setLoggedInUser =
    createAction('[Auth] Set logged in user', props<AuthState>());

export const logout = createAction('[Auth] Logout');

export const logoutSuccess = createAction('[Auth] Logout Success');

export const checkIfUserIsAdmin =
    createAction('[Auth] Check if user is admin', props<{email: string}>());

export const checkIfUserIsAdminSuccess = createAction(
    '[Auth] Check if user is admin success', props<{is_admin: boolean}>());
