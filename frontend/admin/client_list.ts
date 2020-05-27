import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';

import {Client} from '../shared/client_service';

import {NewClientDialog} from './new_client_dialog';

@Component({
  selector: 'app-client-list',
  templateUrl: './client_list.html',
  styleUrls: ['./client_list.scss'],
})
export class ClientList {
  @Output() readonly deleteClient = new EventEmitter<string>();

  @Input()
  set clientList(value: Client[]) {
    this.dataSource = new MatTableDataSource(value);
  }

  readonly displayedColumns = ['name'];

  dataSource: MatTableDataSource<Client>;

  constructor(private readonly matDialog: MatDialog) {}

  openNewClientDialog() {
    this.matDialog.open(NewClientDialog, {width: '500px'});
  }
}
