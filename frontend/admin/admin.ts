import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {ClientService} from '../shared/client_service';
import {SnackBarService} from '../shared/snack_bar_service';

enum SnackBarMessage {
  DELETE_SUCCESS = 'Successfully deleted client',
  DELETE_ERROR = 'There was an error deleting the client',
}

@Component({
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Admin implements OnDestroy {
  readonly clientList$ = this.clientService.clientList$;

  private readonly destroy$ = new ReplaySubject<void>(1);

  constructor(
      private readonly clientService: ClientService,
      private readonly snackBarService: SnackBarService) {}

  ngOnDestroy() {
    this.destroy$.next();
  }

  deleteClient(id: string) {
    this.clientService.deleteClient(id)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
            () => {
              this.snackBarService.openSnackBar$.next(
                  SnackBarMessage.DELETE_SUCCESS);
              this.clientService.getUpdatedClientList();
            },
            () => {
              this.snackBarService.openSnackBar$.next(
                  SnackBarMessage.DELETE_ERROR);
            })
  }
}
