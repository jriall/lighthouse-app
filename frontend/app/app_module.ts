import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from 'frontend/auth/auth_module';

import {CreateSiteModule} from '../create_site/create_site_module';
import {LoginModule} from '../login/login_module';
import {NotFoundModule} from '../not_found/not_found_module';
import {SiteListModule} from '../site_list/site_list_module';
import {SiteOverviewModule} from '../site_overview/site_overview_module';

import {App} from './app';
import {AppLoadModule} from './app_load_module';
import {AppRoutingModule} from './app_routing';
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
    CreateSiteModule,
    LoginModule,
    SiteListModule,
    SiteOverviewModule,
    NotFoundModule,
  ],
  bootstrap: [App],
})
export class AppModule {
}
