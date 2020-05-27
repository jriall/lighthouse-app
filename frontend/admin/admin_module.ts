import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';

import {Admin} from './admin';
import {AdminRoutingModule} from './admin_routing';
import {ClientList} from './client_list';

@NgModule({
  declarations: [Admin, ClientList],
  exports: [Admin, ClientList],
  imports: [
    AdminRoutingModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
  ],
})
export class AdminModule {
}
