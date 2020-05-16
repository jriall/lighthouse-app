import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Store} from '@ngrx/store';

import {SnackBarService} from '../shared/snack_bar_service';

import {selectIsNavigating} from './selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly isNavigating$ = this.store.select(selectIsNavigating);
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
