import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import {CompactSite} from './types';

@Component({
  selector: 'app-site-list-table',
  templateUrl: './site_list_table.html',
  styleUrls: ['./site_list_table.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteListTable {
  @Input()
  set siteList(value: CompactSite[]) {
    this.dataSource = new MatTableDataSource(value);
  }

  dataSource: MatTableDataSource<CompactSite>;
  displayedColumns: ReadonlyArray<string> = ['name', 'url'];
}
