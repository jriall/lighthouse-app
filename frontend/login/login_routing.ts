import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApplicationRoutes} from '../shared/routes';

import {Login} from './login';

const routes: Routes = [{
  component: Login,
  path: ApplicationRoutes.LOGIN,
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {
}
