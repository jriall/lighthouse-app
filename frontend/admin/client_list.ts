import {Component, Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import {Client} from '../shared/client_service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client_list.html',
  styleUrls: ['./client_list.scss'],
})
export class ClientList {
  @Input()
  set clientList(value: Client[]) {
    this.dataSource = new MatTableDataSource(value);
  }

  readonly displayedColumns = ['name'];

  dataSource: MatTableDataSource<Client>;
}
