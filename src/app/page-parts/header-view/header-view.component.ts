import { Component } from '@angular/core';
import { HeaderService, Header } from '@ngx-evry/evry-common';
import { MenuStructures, Banks, Applications } from './demoConst';
import { Store } from '@ngrx/store';
import {take} from "rxjs/internal/operators";

@Component({
  selector: 'header-view',
  templateUrl: './header-view.component.html'
})
export class HeaderViewComponent {

  constructor( private headerService: HeaderService, private store: Store<any>) {}

  setPreconditions() {
    this.headerService.setUserAuthenticationFlag(true);
    this.headerService.setUserName('John Smith');
    this.headerService.setUserBanks(Banks[15]);
    this.headerService.setUserLanguages(Object.keys(['en', 'no']));
    this.headerService.setOnOpenHelpCallback(() => console.log('Help me!'));
    this.headerService.makeVisible();
  }

  showADNHeader() {

    let defHeader = new Header();
    defHeader.config.menu.portal.staticLabel = {
      text: 'ADN static label',
      visible: true
    };
    let config = defHeader.config;
    let header = {
      data: MenuStructures.CFC,
      config: config
    };

    this.headerService.setHeader(header);
  }

  showCFCHeader() {

    this.setPreconditions();
    let header: any;
    header = {};
    this.store.pipe(
      take(1),
    ).subscribe(store => {
      header = store.header;
      return header;
    });

    header.config.menu.portal.staticLabel = {
      text: '',
      visible: false
    };
    header.data = MenuStructures.CFC;
    header.currentApp = {
      title: 'Customer engagements'
    };

    this.headerService.setHeader(header);
  }



  showCBCHeader() {
    this.setPreconditions();
    let header: any;
    header = {};
    this.store.pipe(
      take(1),
    ).subscribe(store => {
      header = store.header;
    });
    header.config.menu.portal.staticLabel = {
      text: '',
      visible: false
    };
    header.data = MenuStructures.CBC;
    header.currentApp = {
      title: 'Product'
    };

    this.headerService.setHeader(header);
  }

  showCBCHeaderWithComponent() {
    this.setPreconditions();
    let header: any;
    this.store.pipe(
      take(1)
    ).subscribe(store => {
      header = store.header;
    });
    header.config.menu.portal.staticLabel = {
      text: '',
      visible: false
    };
    header.data = MenuStructures.CBC;
    header.currentApp = {
      title: 'Product',
      children: Applications
    };

    this.headerService.setHeader(header);
  }

  set5Banks() {
    this.headerService.setUserBanks(Banks[5]);
  }

  set15Banks() {
    this.headerService.setUserBanks(Banks[15]);
  }
}
