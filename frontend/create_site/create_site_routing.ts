import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CreateSite} from './create_site';

const routes: Routes = [{
  component: CreateSite,
  path: '',
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSiteRoutingModule {
}
