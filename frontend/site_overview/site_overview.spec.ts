import {async, TestBed} from '@angular/core/testing';

import {SiteOverview} from './site_overview';

describe('SiteOverview component', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [SiteOverview],
        })
        .compileComponents();
  }));

  it('can be instantiated', () => {
    const fixture = TestBed.createComponent(SiteOverview);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
