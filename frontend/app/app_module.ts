import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from 'frontend/auth/auth_module';

import {NotFoundModule} from '../not_found/not_found_module';

import {App} from './app';
import {AppLoadModule} from './app_load_module';
import {AppRoutingModule} from './app_routing';
import {DEV_MODULES} from './build_specifics';
import {AppStoreModule} from './store';

@NgModule({
  declarations: [App],
  imports: [
    AppLoadModule,
    AppRoutingModule,
    AppStoreModule,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    NotFoundModule,
    ...DEV_MODULES,
  ],
  bootstrap: [App],
})
export class AppModule {
}
