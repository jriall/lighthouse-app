import {DOCUMENT} from '@angular/common';
import {ErrorHandler, Inject, Injectable} from '@angular/core';
import StackdriverErrorReporter from 'stackdriver-errors-js';

import {environment} from '../environments/environment';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private readonly errorHandler = new StackdriverErrorReporter();

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.init();
  }

  private init() {
    const version = this.document.body.dataset.appengineVersion;
    if (environment.production) {
      this.errorHandler.start({...environment.errorHandlerConfig, version});
    }
  }

  handleError(error: Error) {
    if (environment.production) {
      this.errorHandler.report(error);
      console.error(error);
    } else {
      console.error(error);
    }
  }
}
