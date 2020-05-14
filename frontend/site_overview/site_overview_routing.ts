import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SiteOverview} from './site_overview';

const routes: Routes = [{
  component: SiteOverview,
  path: '',
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteOverviewRoutingModule {
}
