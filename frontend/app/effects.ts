import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ROUTER_CANCEL, ROUTER_ERROR, ROUTER_NAVIGATED, ROUTER_REQUEST} from '@ngrx/router-store';
import {mapTo, tap} from 'rxjs/operators';

import * as RootActions from './actions';

@Injectable({providedIn: 'root'})
export class RouterEffects {
  constructor(private readonly action$: Actions) {}

  readonly navigationStart$ = createEffect(() => {
    return this.action$.pipe(
        ofType(ROUTER_REQUEST), tap(() => console.log('start')),
        mapTo(RootActions.setIsNavigating({isNavigating: true})));
  });

  readonly navigationEnd$ = createEffect(() => {
    return this.action$.pipe(
        ofType(ROUTER_NAVIGATED, ROUTER_CANCEL, ROUTER_ERROR),
        tap(() => console.log('end')),
        mapTo(RootActions.setIsNavigating({isNavigating: false})));
  });
}
