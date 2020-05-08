import {async, TestBed} from '@angular/core/testing';

import {CreateSite} from './create_site';

describe('CreateSite component', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [CreateSite],
        })
        .compileComponents();
  }));

  it('can be instantiated', () => {
    const fixture = TestBed.createComponent(CreateSite);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
