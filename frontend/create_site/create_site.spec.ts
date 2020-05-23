import {async, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {CreateSite} from './create_site';
import {SiteForm} from './site_form';

describe('CreateSite component', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [CreateSite, SiteForm],
          imports: [
            FormsModule,
            MatInputModule,
            MatFormFieldModule,
            MatButtonModule,
          ],
        })
        .compileComponents();
  }));

  it('can be instantiated', () => {
    const fixture = TestBed.createComponent(CreateSite);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
