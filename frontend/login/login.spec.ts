import {async, TestBed} from '@angular/core/testing';

import {Login} from './login';

describe('Login component', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Login],
        })
        .compileComponents();
  }));

  it('can be instantiated', () => {
    const fixture = TestBed.createComponent(Login);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
