import {NgModule} from '@angular/core';

import {Admin} from './admin';
import {AdminRoutingModule} from './admin_routing';

@NgModule({
  declarations: [Admin],
  exports: [Admin],
  imports: [AdminRoutingModule],
})
export class AdminModule {
}
