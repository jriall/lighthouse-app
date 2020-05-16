import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';

import {AUTH_FEATURE_KEY, AuthState} from '../auth/reducers';

import {RouterEffects} from './effects';
import {reducer, ROOT_FEATURE_KEY, RootState} from './reducers';

export interface AppState {
  [AUTH_FEATURE_KEY]: AuthState;
  [ROOT_FEATURE_KEY]: RootState;
}

@NgModule({
  imports: [
    EffectsModule.forRoot([]), StoreModule.forRoot({}, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictStateImmutability: true,
        strictStateSerializability: true,
      },
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forFeature(ROOT_FEATURE_KEY, reducer),
    EffectsModule.forFeature([RouterEffects])
  ],
})
export class AppStoreModule {
}
