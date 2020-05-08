import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  templateUrl: './site_overview.html',
  styleUrls: ['./site_overview.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteOverview {
}
