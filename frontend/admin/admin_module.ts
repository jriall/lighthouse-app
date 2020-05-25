import {NgModule} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

import {Admin} from './admin';
import {AdminRoutingModule} from './admin_routing';

@NgModule({
  declarations: [Admin],
  exports: [Admin],
  imports: [
    AdminRoutingModule,
    MatTabsModule,
  ],
})
export class AdminModule {
}
