import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'milan-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoading$: Observable<boolean> = of(false);

  constructor(private store: Store<{ui: fromApp.State}>) { }

  ngOnInit(): void {
    this.store.dispatch({type: 'START_LOADING'});
    setTimeout(() => {
      this.store.dispatch({type: 'STOP_LOADING'});
    }, 5000);
    // this.isLoading$ = this.store.pipe(map(state => state.ui.isLoading));
  }

}
