import { Action } from '@ngrx/store';
import {User} from '../../models/user';
import {UserActions, UserActionTypes} from '../actions/user.actions'



export interface State {
  userResponseContext: User |null;
  loading:boolean;
}

export const initialState: State = {
  userResponseContext: null,
  loading:false
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {

    default:
      return state;
  }
}
