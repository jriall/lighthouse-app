import {NgModule} from '@angular/core';

import {Login} from './login';
import {LoginRoutingModule} from './login_routing';

@NgModule({
  declarations: [Login],
  exports: [Login],
  imports: [LoginRoutingModule],
})
export class LoginModule {
}
