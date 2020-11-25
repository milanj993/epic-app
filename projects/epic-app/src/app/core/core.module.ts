import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HeaderComponent} from './shell/header/header.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {TranslocoRootModule} from '../transloco/transloco-root.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from '@app/app.reducer';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    HttpClientModule,
    TranslocoRootModule,
    StoreModule.forRoot(reducers),
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule {
}
