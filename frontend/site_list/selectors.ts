import {createFeatureSelector, createSelector} from '@ngrx/store';

import {AppState} from '../app/store';

import {SITE_LIST_FEATURE_KEY, SiteListState} from './reducers';

const selectSiteListFeature =
    createFeatureSelector<AppState, SiteListState>(SITE_LIST_FEATURE_KEY);

export const selectSiteList =
    createSelector(selectSiteListFeature, ({siteList}) => siteList);
