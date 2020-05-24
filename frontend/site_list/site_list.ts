import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';

import {updateSiteList} from './actions';
import {selectSiteList} from './selectors';

@Component({
  templateUrl: './site_list.html',
  styleUrls: ['./site_list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteList {
  readonly siteList$ = this.store.select(selectSiteList);

  constructor(private readonly store: Store<{}>) {
    this.store.dispatch(updateSiteList());
  }
}
