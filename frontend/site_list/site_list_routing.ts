import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ApplicationRoutes} from '../shared/routes';

import {SiteList} from './site_list';

const routes: Routes = [{
  component: SiteList,
  path: ApplicationRoutes.SITE_LIST,
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SiteListRoutingModule {
}
