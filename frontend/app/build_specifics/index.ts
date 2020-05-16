import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from 'frontend/environments/environment';

export const DEV_MODULES = [
  StoreDevtoolsModule.instrument({maxAge: 25}),
];
