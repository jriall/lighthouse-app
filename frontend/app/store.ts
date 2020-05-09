import {AUTH_FEATURE_KEY, AuthState} from 'frontend/auth/reducers';

export interface AppState {
  [AUTH_FEATURE_KEY]: AuthState;
}
