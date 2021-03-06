import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Store} from '@ngrx/store';

import {selectIsLoggedIn, selectIsUserAdmin, selectLoggedInUser} from '../auth/selectors';
import {SnackBarService} from '../shared/snack_bar_service';

import {selectIsNavigating} from './selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly isAdmin$ = this.store.select(selectIsUserAdmin);
  readonly isNavigating$ = this.store.select(selectIsNavigating);
  readonly isLoggedIn$ = this.store.select(selectIsLoggedIn);
  readonly user$ = this.store.select(selectLoggedInUser);

  constructor(
      private readonly snackBarService: SnackBarService,
      private readonly snackBar: MatSnackBar,
      private readonly store: Store<{}>) {
    this.listenForSnackBarMessages();
  }

  private listenForSnackBarMessages() {
    this.snackBarService.openSnackBar$.subscribe((message) => {
      this.snackBar.open(message);
    });
  }
}
