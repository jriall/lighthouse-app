import {createAction, props} from '@ngrx/store';

export const setIsNavigating =
    createAction('[Root] Is navigating', props<{isNavigating: boolean}>());
