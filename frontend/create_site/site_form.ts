import {ChangeDetectionStrategy, Component} from '@angular/core';

import {ApplicationRoute} from '../shared/routes';

interface NewSiteModel {
  name: string;
  url: string;
}

@Component({
  selector: 'app-site-form',
  templateUrl: './site_form.html',
  styleUrls: ['./site_form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteForm {
  readonly siteModel: NewSiteModel = {name: '', url: ''};
  readonly siteListRoute = `/${ApplicationRoute.SITE_LIST}`;

  onSubmit() {
    // TODO(jriall): Submit form.
  }
}
