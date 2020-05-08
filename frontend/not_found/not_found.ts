import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  templateUrl: './not_found.html',
  styleUrls: ['./not_found.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFound {
}
