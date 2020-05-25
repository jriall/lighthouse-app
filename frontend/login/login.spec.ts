import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {MockStore, provideMockStore} from '@ngrx/store/testing';

import {login} from '../auth/actions';

import {Login} from './login';

describe('Login component', () => {
  let fixture: ComponentFixture<Login>;
  let mockStore: MockStore;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Login],
          providers: [provideMockStore()],
        })
        .compileComponents();
    fixture = TestBed.createComponent(Login);
    mockStore = TestBed.inject(MockStore);
  }));

  it('can be instantiated', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('dispatches the login action to the store when the button is clicked',
     () => {
       spyOn(mockStore, 'dispatch');
       const button = fixture.debugElement.query(By.css('button'));
       button.nativeElement.click();
       fixture.detectChanges();

       expect(mockStore.dispatch).toHaveBeenCalledWith(login());
     });
});
