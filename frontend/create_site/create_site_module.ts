import {NgModule} from '@angular/core';

import {CreateSite} from './create_site';
import {CreateSiteRoutingModule} from './create_site_routing';

@NgModule({
  declarations: [CreateSite],
  exports: [CreateSite],
  imports: [CreateSiteRoutingModule],
})
export class CreateSiteModule {
}
