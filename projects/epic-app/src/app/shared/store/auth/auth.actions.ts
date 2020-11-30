import { Action } from '@ngrx/store';

export const AUTHENTICATE: string = '[AUTH] Authenticate';
export const UNAUTHENTICATE: string = '[AUTH] Unauthenticate';

export class Authenticate implements Action {
  readonly type = AUTHENTICATE;
}

export class Unauthenticate implements Action {
  readonly type = UNAUTHENTICATE;
}

export type AuthActions = Authenticate | Unauthenticate;
