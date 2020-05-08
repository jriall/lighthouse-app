import {async, TestBed} from '@angular/core/testing';

import {NotFound} from './not_found';

describe('NotFound component', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [NotFound],
        })
        .compileComponents();
  }));

  it('can be instantiated', () => {
    const fixture = TestBed.createComponent(NotFound);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
