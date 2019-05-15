import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// 3d party libraries
import {NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { TranslateModule } from '@ngx-translate/core'
// components
import { EvryCommonModule } from '@ngx-evry/evry-common';
import { AppComponent } from './app.component';
import { HeaderViewComponent } from './page-parts/header-view/header-view.component';
import { FooterViewComponent } from './page-parts/footer-view/footer-view.component';
import { headerReducer } from '@ngx-evry/evry-common';
import { titleReducer } from '@ngx-evry/evry-common';

export const CommonReducers = {
  header: headerReducer,
  title: titleReducer
};

//const
import { i18n_CONFIG } from './app.translate';
import { EVRY_ARCHIVE_ROUTES } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderViewComponent,
    FooterViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(i18n_CONFIG),
    RouterModule.forRoot(EVRY_ARCHIVE_ROUTES),
    StoreModule.forRoot({
      routerReducer: routerReducer,
      ...CommonReducers
    }),
    /**
     * @ngrx/router-store keeps router state up-to-date in the store and uses
     * the store as the single source of truth for the router's state.
     */
    StoreRouterConnectingModule,
    EvryCommonModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
