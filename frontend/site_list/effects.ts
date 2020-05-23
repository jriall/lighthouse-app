import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {SnackBarService} from 'frontend/shared/snack_bar_service';
import {of as observableOf} from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';

import * as SiteListActions from './actions';
import {SiteListService} from './site_list_service';

@Injectable({providedIn: 'root'})
export class SiteListEffects {
  constructor(
      private readonly action$: Actions,
      private readonly siteListService: SiteListService,
      private readonly snackBarService: SnackBarService) {}

  readonly updateSiteList$ = createEffect(() => {
    return this.action$.pipe(
        ofType(SiteListActions.updateSiteList),
        mergeMap(() => {
          return this.siteListService.fetchSiteList().pipe(
              map((response) => SiteListActions.setSiteList(response)));
        }),
        catchError((error) => {
          return observableOf(SiteListActions.updateSiteListError({error}));
        }),
    );
  });

  readonly updateSiteListError$ = createEffect(() => {
    return this.action$.pipe(
        ofType(SiteListActions.updateSiteListError),
        tap((error) => {
          this.snackBarService.openSnackBar$.next(error.error.message);
        }),
    );
  }, {dispatch: false});
}
