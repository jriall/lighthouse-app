import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ApplicationRoutes} from '../shared/routes';

import {CreateSite} from './create_site';

const routes: Routes = [{
  component: CreateSite,
  path: ApplicationRoutes.CREATE_SITE,
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CreateSiteRoutingModule {
}
