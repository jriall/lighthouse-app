import {createAction, props} from '@ngrx/store';

import {CompactSite} from './types';

export const updateSiteList = createAction('[Site list] Update site list');

export const updateSiteListError =
    createAction('[Site list] Update site list error', props<{error: Error}>());

export const setSiteList = createAction(
    '[Site list] Update site list success', props<{siteList: CompactSite[]}>());
