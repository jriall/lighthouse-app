import {HttpClientModule} from '@angular/common/http';
import {ErrorHandler, NgModule} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AdminModule} from '../admin/admin_module';
import {AuthModule} from '../auth/auth_module';
import {HeaderModule} from '../header/header';
import {NotFoundModule} from '../not_found/not_found_module';

import {App} from './app';
import {AppLoadModule} from './app_load_module';
import {AppRoutingModule} from './app_routing';
import {DEV_MODULES} from './build_specifics';
import {GlobalErrorHandler} from './error_handler';
import {AppStoreModule} from './store';

@NgModule({
  declarations: [App],
  imports: [
    AdminModule,
    AppLoadModule,
    AppRoutingModule,
    AppStoreModule,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    HeaderModule,
    HttpClientModule,
    MatProgressBarModule,
    MatSnackBarModule,
    NotFoundModule,
    ...DEV_MODULES,
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 4000}},
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
  ],
  bootstrap: [App],
})
export class AppModule {
}
