import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

import {Admin} from './admin';
import {AdminRoutingModule} from './admin_routing';
import {ClientList} from './client_list';

@NgModule({
  declarations: [Admin, ClientList],
  exports: [Admin, ClientList],
  imports: [
    AdminRoutingModule,
    CommonModule,
    MatTableModule,
    MatTabsModule,
  ],
})
export class AdminModule {
}
