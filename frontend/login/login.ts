import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
}
