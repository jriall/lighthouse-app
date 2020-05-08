import {NgModule} from '@angular/core';

import {SiteList} from './site_list';
import {SiteListRoutingModule} from './site_list_routing';

@NgModule({
  declarations: [SiteList],
  exports: [SiteList],
  imports: [SiteListRoutingModule],
})
export class SiteListModule {
}
