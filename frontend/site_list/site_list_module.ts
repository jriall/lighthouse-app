import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
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
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    SiteListRoutingModule,
    StoreModule.forFeature(SITE_LIST_FEATURE_KEY, reducer),
  ],
})
export class SiteListModule {
}
