import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';

import {Client, ClientService} from './client_service';

@Injectable({providedIn: 'root'})
export class ClientListResolver implements Resolve<Observable<Client[]>> {
  constructor(private readonly clientService: ClientService) {}

  resolve(): Observable<Client[]> {
    return this.clientService.getUpdatedClientList().pipe(first());
  }
}
