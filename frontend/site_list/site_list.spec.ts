import {async, TestBed} from '@angular/core/testing';

import {SiteList} from './site_list';

describe('SiteList component', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [SiteList],
        })
        .compileComponents();
  }));

  it('can be instantiated', () => {
    const fixture = TestBed.createComponent(SiteList);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
