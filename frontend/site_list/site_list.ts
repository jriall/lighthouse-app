import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  templateUrl: './site_list.html',
  styleUrls: ['./site_list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteList {
}
