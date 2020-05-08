import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AuthService} from '../auth/auth_service';

export function resolveAuthLibrary(authService: AuthService): () =>
    Promise<void> {
  return () => authService.loadLibrary();
}

@NgModule({
  providers: [
    AuthService, {
      deps: [AuthService],
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: resolveAuthLibrary,
    }
  ]
})
export class AppLoadModule {
}
