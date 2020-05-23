import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';
import {finalize, takeUntil} from 'rxjs/operators';

import {ApplicationRoute} from '../shared/routes';
import {SnackBarService} from '../shared/snack_bar_service';

import {CreateSiteService} from './create_site_service';
import {NewSiteModel} from './types';

enum SnackBarMessage {
  SUCCESS = 'Successfully created the site',
  START = 'Creating the site and performing an audit. Please be patient...',
}
@Component({
  templateUrl: './create_site.html',
  styleUrls: ['./create_site.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateSite implements OnDestroy {
  private readonly isSubmitting$ = new BehaviorSubject(false);
  readonly isSubmittingObs$: Observable<boolean> = this.isSubmitting$;

  private readonly destroy$ = new ReplaySubject<void>(1);

  constructor(
      private readonly createSiteService: CreateSiteService,
      private readonly snackBarService: SnackBarService,
      private readonly router: Router) {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  createNewSite(newSite: NewSiteModel) {
    this.isSubmitting$.next(true);
    this.snackBarService.openSnackBar$.next(SnackBarMessage.START);
    this.createSiteService.createSite(newSite)
        .pipe(
            finalize(() => void this.isSubmitting$.next(false)),
            takeUntil(this.destroy$))
        .subscribe(
            () => {
              this.snackBarService.openSnackBar$.next(SnackBarMessage.SUCCESS);
              this.router.navigate([ApplicationRoute.SITE_LIST]);
            },
            (error: Error) => {
              this.snackBarService.openSnackBar$.next(error.message);
            });
  }
}
