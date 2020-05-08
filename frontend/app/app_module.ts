import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {environment} from '../environments/environment';

import {App} from './app';
import {AppRoutingModule} from './app_routing';

@NgModule({
  declarations: [App],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      maxAge: 25,
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
  ],
  bootstrap: [App],
})
export class AppModule {
}
