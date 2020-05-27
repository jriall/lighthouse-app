import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import {Client} from '../shared/client_service';

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
}
