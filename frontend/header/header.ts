import {ChangeDetectionStrategy, Component, NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';

import {ApplicationRoute} from '../shared/routes';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.scss'],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  readonly ApplicationRoute = ApplicationRoute;
}

@NgModule({
  declarations: [Header],
  exports: [Header],
  imports: [MatToolbarModule, RouterModule],
})
export class HeaderModule {
}
