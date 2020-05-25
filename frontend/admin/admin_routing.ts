import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Admin} from './admin';
import {AdminGuard} from './admin_guard';

const routes: Routes = [{
  component: Admin,
  path: '',
  pathMatch: 'full',
  canActivate: [AdminGuard],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
