import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {CreateSiteModule} from '../create_site/create_site_module';
import {environment} from '../environments/environment';
import {LoginModule} from '../login/login_module';
import {NotFoundModule} from '../not_found/not_found_module';
import {SiteListModule} from '../site_list/site_list_module';
import {SiteOverviewModule} from '../site_overview/site_overview_module';

import {App} from './app';
import {AppLoadModule} from './app_load_module';
import {AppRoutingModule} from './app_routing';

@NgModule({
  declarations: [App],
  imports: [
    AppLoadModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CreateSiteModule,
    EffectsModule.forRoot([]),
    LoginModule,
    SiteListModule,
    SiteOverviewModule,
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      maxAge: 25,
    }),
    StoreModule.forRoot({}),
    StoreRouterConnectingModule.forRoot(),
    NotFoundModule,
  ],
  bootstrap: [App],
})
export class AppModule {
}
