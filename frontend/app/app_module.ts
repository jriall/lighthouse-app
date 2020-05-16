import {NgModule} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';
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
    MatProgressBarModule,
    MatSnackBarModule,
    NotFoundModule,
    ...DEV_MODULES,
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 4000}},
  ],
  bootstrap: [App],
})
export class AppModule {
}
