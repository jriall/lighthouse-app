import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

import {ApplicationRoute} from '../shared/routes';

import {NewSiteModel} from './types';

@Component({
  selector: 'app-site-form',
  templateUrl: './site_form.html',
  styleUrls: ['./site_form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteForm {
  @Input() isSubmitting = false;
  @Output() readonly createNewSite = new EventEmitter<NewSiteModel>();
  @ViewChild('form', {read: NgForm}) readonly form!: NgForm;

  readonly siteModel: NewSiteModel = {name: '', url: ''};
  readonly siteListRoute = `/${ApplicationRoute.SITE_LIST}`;
  readonly validUrlPattern =
      '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?[a-zA-Z0-9?=]+';

  onSubmit() {
    if (!this.form.valid) return;
    this.createNewSite.next(this.siteModel);
  }
}
