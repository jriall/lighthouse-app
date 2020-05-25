import {async, TestBed} from '@angular/core/testing';
import {MatTabsModule} from '@angular/material/tabs';

import {Admin} from './admin';

describe('Admin component', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Admin],
          imports: [MatTabsModule],
        })
        .compileComponents();
  }));

  it('can be instantiated', () => {
    const fixture = TestBed.createComponent(Admin);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
