import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {selectAccessToken} from './selectors';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly store: Store<{}>) {}

  intercept(request: HttpRequest<any>, next: HttpHandler):
      Observable<HttpEvent<any>> {
    return this.store.select(selectAccessToken).pipe(switchMap((token) => {
      if (token) {
        const requestWithToken = request.clone(
            {headers: request.headers.set('Authorization', 'Bearer ' + token)});
        return next.handle(requestWithToken);
      } else {
        return next.handle(request);
      }
    }));
  }
}
