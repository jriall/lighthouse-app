import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Admin {
}
