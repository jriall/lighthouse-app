
import {Action, createReducer, on} from '@ngrx/store';

import * as RootActions from './actions';

export const ROOT_FEATURE_KEY = 'root';

export interface RootState {
  isNavigating: boolean;
}

const INITIAL_STATE: RootState = {
  isNavigating: false,
};

const rootReducer = createReducer(
    INITIAL_STATE,
    on(RootActions.setIsNavigating,
       (state, {isNavigating}) => {
         return {
           ...state,
           isNavigating,
         };
       }),
);

export function reducer(state: RootState, action: Action) {
  return rootReducer(state, action);
}
