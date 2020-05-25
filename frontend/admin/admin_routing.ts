import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Admin} from './admin';

// TODO(jriall): Add admin guard when ready.
const routes: Routes = [{
  component: Admin,
  path: '',
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
