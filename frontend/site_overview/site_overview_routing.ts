import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ApplicationRoutes} from '../shared/routes';

import {SiteOverview} from './site_overview';

const routes: Routes = [{
  component: SiteOverview,
  path: ApplicationRoutes.SITE_OVERVIEW,
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SiteOverviewRoutingModule {
}
