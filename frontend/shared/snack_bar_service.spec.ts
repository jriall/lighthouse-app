import {shareReplay} from 'rxjs/operators';

import {SnackBarService} from './snack_bar_service';

describe('The SnackBarService', () => {
  let snackBarService: SnackBarService;

  beforeEach(() => {
    snackBarService = new SnackBarService();
  });

  it('can be instantiated', () => {
    expect(snackBarService).toBeTruthy();
  });

  it('exposes messages on the openSnackBar$ subject', () => {
    const lastMessage = snackBarService.openSnackBar$.pipe(shareReplay(1));

    lastMessage.subscribe((message) => {
      expect(message).toBe('test message');
    });

    snackBarService.openSnackBar$.next('test message');
  });
});
