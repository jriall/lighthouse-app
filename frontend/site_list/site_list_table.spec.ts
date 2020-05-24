import {async, TestBed} from '@angular/core/testing';

import {SiteListTable} from './site_list_table';

describe('SiteListTable component', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [SiteListTable],
        })
        .compileComponents();
  }));

  it('can be instantiated', () => {
    const fixture = TestBed.createComponent(SiteListTable);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
