import {createFeatureSelector, createSelector} from '@ngrx/store';

import {ROOT_FEATURE_KEY, RootState} from './reducers';
import {AppState} from './store';

const selectRootFeature =
    createFeatureSelector<AppState, RootState>(ROOT_FEATURE_KEY);

export const selectIsNavigating =
    createSelector(selectRootFeature, ({isNavigating}) => isNavigating);
