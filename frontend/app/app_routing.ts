import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApplicationRoutes} from 'frontend/shared/routes';

// TODO(jriall): Replace with auth guard.
const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: ApplicationRoutes.LOGIN,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}