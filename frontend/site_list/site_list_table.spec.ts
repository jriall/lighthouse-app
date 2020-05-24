import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatTableModule} from '@angular/material/table';
import {By} from '@angular/platform-browser';

import {SiteListTable} from './site_list_table';

describe('SiteListTable component', () => {
  let fixture: ComponentFixture<SiteListTable>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [SiteListTable],
          imports: [MatTableModule],
        })
        .compileComponents();
  }));

  it('can be instantiated', () => {
    fixture = TestBed.createComponent(SiteListTable);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('displays a row for each site in the list', () => {
    fixture = TestBed.createComponent(SiteListTable);
    const component = fixture.componentInstance;
    component.siteList = [
      {name: 'test1', url: 'https://example1.com'},
      {name: 'test2', url: 'https://example2.com'},
      {name: 'test3', url: 'https://example3.com'},
    ];
    fixture.detectChanges();

    const tableRows = fixture.debugElement.queryAll(By.css('.site-row'));

    expect(tableRows.length).toBe(3);
  })
});
