import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from 'frontend/auth/auth_guard';
import {CreateSite} from 'frontend/create_site/create_site';
import {Login} from 'frontend/login/login';
import {NotFound} from 'frontend/not_found/not_found';
import {ApplicationRoutes} from 'frontend/shared/routes';
import {SiteList} from 'frontend/site_list/site_list';
import {SiteOverview} from 'frontend/site_overview/site_overview';

// TODO(jriall): Replace with auth guard.
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ApplicationRoutes.LOGIN,
  },
  {
    path: ApplicationRoutes.CREATE_SITE,
    loadChildren: () => import('../create_site/create_site_module')
                            .then((module) => module.CreateSiteModule),
  },
  {
    path: ApplicationRoutes.LOGIN,
    loadChildren: () =>
        import('../login/login_module').then((module) => module.LoginModule),
  },
  {
    path: ApplicationRoutes.SITE_LIST,
    loadChildren: () => import('../site_list/site_list_module')
                            .then((module) => module.SiteListModule),
  },
  {
    path: ApplicationRoutes.SITE_OVERVIEW,
    loadChildren: () => import('../site_overview/site_overview_module')
                            .then((module) => module.SiteOverviewModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
