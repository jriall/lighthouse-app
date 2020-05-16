import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {MemoizedSelector} from '@ngrx/store';
import {MockStore, provideMockStore} from '@ngrx/store/testing';

import {App} from './app';
import {RootState} from './reducers';
import {selectIsNavigating} from './selectors';

describe('AppComponent', () => {
  let fixture: ComponentFixture<App>;
  let mockStore: MockStore;
  let mockIsNavigatingSelector: MemoizedSelector<RootState, boolean>;

  const queryLoadingBar = () =>
      fixture.debugElement.query(By.css('mat-progress-bar'));

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [App],
          imports:
              [RouterTestingModule, MatProgressBarModule, MatSnackBarModule],
          providers: [provideMockStore()],
        })
        .compileComponents();

    fixture = TestBed.createComponent(App);
    mockStore = TestBed.inject(MockStore);
    mockIsNavigatingSelector =
        mockStore.overrideSelector(selectIsNavigating, false);
    fixture.detectChanges();
  }));

  it('can be instantiated', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('shows the loading bar while the app is navigating', () => {
    mockIsNavigatingSelector.setResult(true);
    mockStore.refreshState();
    fixture.detectChanges();

    expect(queryLoadingBar()).toBeTruthy();
  });

  it('hides the loading bar while the app is not navigating', () => {
    mockIsNavigatingSelector.setResult(true);
    mockStore.refreshState();
    fixture.detectChanges();

    mockIsNavigatingSelector.setResult(false);
    mockStore.refreshState();
    fixture.detectChanges();

    expect(queryLoadingBar()).toBeFalsy();
  });
});
