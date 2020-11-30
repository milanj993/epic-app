import { Component, OnInit } from '@angular/core';

import {Store} from '@ngrx/store';

import {Observable, of} from 'rxjs';

import * as fromRoot from '../../../app.reducer';
import * as UI from '../../../shared/store/ui/ui.actions';
import * as AUTH from '../../../shared/store/auth/auth.actions';

@Component({
  selector: 'milan-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoading$: Observable<boolean> = of(false);
  isAuthenticated$: Observable<boolean> = of(false);

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.store.dispatch(new UI.StartLoading());
    this.store.dispatch(new AUTH.Unauthenticate());
    setTimeout(() => {
      this.store.dispatch(new UI.StopLoading());
      this.store.dispatch(new AUTH.Authenticate());
    }, 5000);
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.isAuthenticated$ = this.store.select(fromRoot.getIsAuthenticated);
  }

}
