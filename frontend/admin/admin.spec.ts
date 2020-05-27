import {async, TestBed} from '@angular/core/testing';
import {MatTabsModule} from '@angular/material/tabs';
import {ClientService} from 'frontend/shared/client_service';
import {of as observbableOf} from 'rxjs';

import {Admin} from './admin';

describe('Admin component', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Admin],
          imports: [MatTabsModule],
          providers: [
            {
              provide: ClientService,
              useValue: {
                clientList$: observbableOf([]),
              },
            },
          ],
        })
        .compileComponents();
  }));

  it('can be instantiated', () => {
    const fixture = TestBed.createComponent(Admin);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
