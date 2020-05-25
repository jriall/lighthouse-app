import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';

import {login} from '../auth/actions';

@Component({
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  constructor(private readonly store: Store<{}>) {}

  login() {
    this.store.dispatch(login());
  }
}
