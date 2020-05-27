import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {shareReplay, switchMap} from 'rxjs/operators';

export interface Client {
  id: string;
  name: string;
}

@Injectable({providedIn: 'root'})
export class ClientService {
  private readonly refreshClientList$ = new ReplaySubject<void>(1);

  readonly clientList$ = this.refreshClientList$.pipe(
      switchMap(() => this.httpClient.get<Client[]>('/api/v1/clients/')),
      shareReplay({refCount: true, bufferSize: 1}))

  constructor(private readonly httpClient: HttpClient) {}

  getUpdatedClientList(): Observable<Client[]> {
    this.refreshClientList$.next();
    return this.clientList$;
  }

  deleteClient(id: string): Observable<void> {
    return this.httpClient.delete<void>(`/api/v1/clients/${id}`);
  }
}
