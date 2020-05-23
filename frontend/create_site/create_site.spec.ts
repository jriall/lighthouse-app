import {HttpClientModule} from '@angular/common/http';
import {async, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {RouterTestingModule} from '@angular/router/testing';

import {CreateSite} from './create_site';
import {CreateSiteService} from './create_site_service';
import {SiteForm} from './site_form';

describe('CreateSite component', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [CreateSite, SiteForm],
          imports: [
            FormsModule,
            HttpClientModule,
            MatInputModule,
            MatFormFieldModule,
            MatButtonModule,
            RouterTestingModule,
          ],
          providers: [CreateSiteService],
        })
        .compileComponents();
  }));

  it('can be instantiated', () => {
    const fixture = TestBed.createComponent(CreateSite);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
