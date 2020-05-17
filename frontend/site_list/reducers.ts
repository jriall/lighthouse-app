import {Action, createReducer, on} from '@ngrx/store';

import * as SiteListActions from './actions';
import {CompactSite} from './types';

export const SITE_LIST_FEATURE_KEY = 'siteList';

export interface SiteListState {
  siteList: CompactSite[];
}

const INITIAL_STATE: SiteListState = {
  siteList: [],
};

const siteListReducer = createReducer(
    INITIAL_STATE,
    on(SiteListActions.setSiteList,
       (state, {siteList}) => ({...state, siteList})),
);

export function reducer(state: SiteListState, action: Action) {
  return siteListReducer(state, action);
}
