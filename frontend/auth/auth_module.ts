import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {AuthInterceptor} from './auth_interceptor';
import {AuthEffects} from './effects';
import {AUTH_FEATURE_KEY, reducer} from './reducers';

@NgModule({
  imports: [
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(AUTH_FEATURE_KEY, reducer),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ]
})
export class AuthModule {
}
