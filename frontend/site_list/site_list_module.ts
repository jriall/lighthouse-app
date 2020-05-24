import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {SiteListEffects} from './effects';
import {reducer, SITE_LIST_FEATURE_KEY} from './reducers';
import {SiteList} from './site_list';
import {SiteListRoutingModule} from './site_list_routing';
import {SiteListTable} from './site_list_table';

@NgModule({
  declarations: [
    SiteList,
    SiteListTable,
  ],
  exports: [SiteList],
  imports: [
    CommonModule,
    EffectsModule.forFeature([SiteListEffects]),
    SiteListRoutingModule,
    StoreModule.forFeature(SITE_LIST_FEATURE_KEY, reducer),
  ],
})
export class SiteListModule {
}
