import {AuthActions, AUTHENTICATE, UNAUTHENTICATE} from './auth.actions';

export interface State {
  isAuthenticated: boolean;
}

const initialState: State = {
  isAuthenticated: false
};

export function authReducer(state: State = initialState, action: AuthActions): State {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: true
      };
    case UNAUTHENTICATE:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}

export const getIsAuthenticated = (state: State) => state.isAuthenticated;

