import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotFound} from './not_found';

const routes: Routes = [{
  component: NotFound,
  path: '**',
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFoundRoutingModule {
}
