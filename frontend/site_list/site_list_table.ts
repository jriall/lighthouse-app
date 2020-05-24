import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {CompactSite} from './types';

@Component({
  selector: 'app-site-list-table',
  templateUrl: './site_list_table.html',
  styleUrls: ['./site_list_table.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteListTable {
  @Input() siteList: CompactSite[] = [];
}
