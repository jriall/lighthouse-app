import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';

import {Admin} from './admin';
import {AdminRoutingModule} from './admin_routing';
import {ClientList} from './client_list';
import {NewClientDialog} from './new_client_dialog';

@NgModule({
  declarations: [
    Admin,
    ClientList,
    NewClientDialog,
  ],
  exports: [Admin, ClientList],
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
  ],
  entryComponents: [NewClientDialog],
})
export class AdminModule {
}
