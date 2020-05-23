import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {NewSiteModel} from './types';

@Injectable({providedIn: 'root'})
export class CreateSiteService {
  constructor(private readonly httpClient: HttpClient) {}

  createSite(site: NewSiteModel): Observable<void> {
    return this.httpClient.post<void>('/api/sites/', site);
  }
}
