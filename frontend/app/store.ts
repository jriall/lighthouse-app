import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AUTH_FEATURE_KEY, AuthState} from '../auth/reducers';
import {environment} from '../environments/environment';

export interface AppState {
  [AUTH_FEATURE_KEY]: AuthState;
}

@NgModule({
  imports: [
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictStateImmutability: true,
        strictStateSerializability: true,
      },
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      maxAge: 25,
    }),
  ],
})
export class AppStoreModule {
}
