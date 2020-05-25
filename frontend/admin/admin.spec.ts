import {async, TestBed} from '@angular/core/testing';

import {Admin} from './admin';

describe('Admin component', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Admin],
        })
        .compileComponents();
  }));

  it('can be instantiated', () => {
    const fixture = TestBed.createComponent(Admin);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
