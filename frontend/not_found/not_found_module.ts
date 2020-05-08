import {NgModule} from '@angular/core';

import {NotFound} from './not_found';
import {NotFoundRoutingModule} from './not_found_routing';

@NgModule({
  declarations: [NotFound],
  exports: [NotFound],
  imports: [NotFoundRoutingModule],
})
export class NotFoundModule {
}
