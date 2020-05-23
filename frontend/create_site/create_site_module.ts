import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {RouterModule} from '@angular/router';

import {CreateSite} from './create_site';
import {CreateSiteRoutingModule} from './create_site_routing';
import {SiteForm} from './site_form';

@NgModule({
  declarations: [CreateSite, SiteForm],
  exports: [CreateSite],
  imports: [
    CreateSiteRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
  ],
})
export class CreateSiteModule {
}
