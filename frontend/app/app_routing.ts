import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EmptyComponent} from '../shared/empty_component';
import {ApplicationRoute} from '../shared/routes';

import {HomepageGuard} from './homepage_guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EmptyComponent,
    canActivate: [HomepageGuard],
  },
  {
    path: ApplicationRoute.CREATE_SITE,
    loadChildren: () => import('../create_site/create_site_module')
                            .then((module) => module.CreateSiteModule),
  },
  {
    path: ApplicationRoute.LOGIN,
    loadChildren: () =>
        import('../login/login_module').then((module) => module.LoginModule),
  },
  {
    path: ApplicationRoute.SITE_LIST,
    loadChildren: () => import('../site_list/site_list_module')
                            .then((module) => module.SiteListModule),
  },
  {
    path: ApplicationRoute.SITE_OVERVIEW,
    loadChildren: () => import('../site_overview/site_overview_module')
                            .then((module) => module.SiteOverviewModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
