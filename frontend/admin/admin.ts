import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ClientService} from 'frontend/shared/client_service';

@Component({
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Admin {
  readonly clientList$ = this.clientService.clientList$;

  constructor(private readonly clientService: ClientService) {}
}
