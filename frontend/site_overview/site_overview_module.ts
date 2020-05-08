import {NgModule} from '@angular/core';

import {SiteOverview} from './site_overview';
import {SiteOverviewRoutingModule} from './site_overview_routing';

@NgModule({
  declarations: [SiteOverview],
  exports: [SiteOverview],
  imports: [SiteOverviewRoutingModule],
})
export class SiteOverviewModule {
}
