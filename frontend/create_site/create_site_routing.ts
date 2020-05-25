import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ClientListResolver} from '../shared/client_list_resolver';

import {CreateSite} from './create_site';

const routes: Routes = [{
  component: CreateSite,
  path: '',
  pathMatch: 'full',
  resolve: {
    'clientList': ClientListResolver,
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSiteRoutingModule {
}
