import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from 'frontend/auth/auth_guard';

import {ApplicationRoutes} from '../shared/routes';

import {SiteList} from './site_list';

const routes: Routes = [{
  canActivate: [AuthGuard],
  component: SiteList,
  path: '',
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteListRoutingModule {
}
