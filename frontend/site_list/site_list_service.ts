import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {SiteListApiResponse} from './types';

@Injectable({providedIn: 'root'})
export class SiteListService {
  constructor(private readonly httpClient: HttpClient) {}

  fetchSiteList(): Observable<SiteListApiResponse> {
    return this.httpClient.get<SiteListApiResponse>('/api/sites/');
  }
}
