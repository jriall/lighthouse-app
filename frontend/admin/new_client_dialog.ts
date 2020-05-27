import {Component, OnDestroy, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {ClientService} from 'frontend/shared/client_service';
import {SnackBarService} from 'frontend/shared/snack_bar_service';
import {ReplaySubject} from 'rxjs';
import {finalize, takeUntil} from 'rxjs/operators';

enum SnackBarMessage {
  CREATE_SUCCESS = 'Successfully created client',
  CREATE_ERROR = 'There was an error creating the client',
}

@Component({
  templateUrl: './new_client_dialog.html',
  styleUrls: ['./new_client_dialog.scss'],
})
export class NewClientDialog implements OnDestroy {
  @ViewChild('form', {read: NgForm}) readonly form!: NgForm;

  isSubmitting = false;
  clientName = '';

  private readonly destroy$ = new ReplaySubject<void>(1);

  constructor(
      private readonly clientService: ClientService,
      private readonly dialogRef: MatDialogRef<NewClientDialog>,
      private readonly snackBarService: SnackBarService) {}

  ngOnDestroy() {
    this.destroy$.next();
  }

  onSubmit() {
    // TODO(jriall): Move this logic to the store.
    this.isSubmitting = true;
    if (!this.form.valid) return;
    this.clientService.createNewClient(this.clientName)
        .pipe(
            takeUntil(this.destroy$),
            finalize(() => {
              this.isSubmitting = false;
            }),
            )
        .subscribe(
            () => {
              this.snackBarService.openSnackBar$.next(
                  SnackBarMessage.CREATE_SUCCESS);
              this.clientService.getUpdatedClientList();
              this.dialogRef.close();
            },
            () => {
              this.snackBarService.openSnackBar$.next(
                  SnackBarMessage.CREATE_ERROR);
            });
  }
}
