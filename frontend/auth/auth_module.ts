import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {AuthEffects} from './effects';
import {AUTH_FEATURE_KEY, reducer} from './reducers';

@NgModule({
  imports: [
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(AUTH_FEATURE_KEY, reducer),
  ],
})
export class AuthModule {
}
