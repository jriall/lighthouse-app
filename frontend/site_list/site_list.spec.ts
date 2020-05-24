import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MemoizedSelector} from '@ngrx/store';
import {MockStore, provideMockStore} from '@ngrx/store/testing';

import {SiteListState} from './reducers';
import {selectSiteList} from './selectors';
import {SiteList} from './site_list';
import {SiteListTable} from './site_list_table';
import {CompactSite} from './types';

describe('SiteList component', () => {
  let fixture: ComponentFixture<SiteList>;
  let mockStore: MockStore;
  let mockSiteListSelector: MemoizedSelector<SiteListState, CompactSite[]>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [SiteList, SiteListTable],
          providers: [provideMockStore()],

        })
        .compileComponents();

    fixture = TestBed.createComponent(SiteList);
    mockStore = TestBed.inject(MockStore);
    mockSiteListSelector = mockStore.overrideSelector(selectSiteList, []);
  }));

  it('can be instantiated', () => {
    const fixture = TestBed.createComponent(SiteList);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
