import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {User} from 'frontend/auth/selectors';

import {ApplicationRoute} from '../shared/routes';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.scss'],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  @Input() isLoggedIn = false;
  @Input() isAdmin = false;
  @Input() user: User;

  readonly ApplicationRoute = ApplicationRoute;
}

@NgModule({
  declarations: [Header],
  exports: [Header],
  imports: [CommonModule, MatToolbarModule, RouterModule],
})
export class HeaderModule {
}
