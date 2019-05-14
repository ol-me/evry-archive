import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { validatorPatterns } from '@ngx-evry/evry-common';
import { amountPatterns } from '@ngx-evry/evry-common';
import { datePatterns } from '@ngx-evry/evry-common';
import { Subscription } from 'rxjs/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private translateSubscription: Subscription;
  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.setDefaultLang('no');
    this.translateService.use('no');
    validatorPatterns.current = validatorPatterns[this.translateService.currentLang];
    amountPatterns.current = amountPatterns[this.translateService.currentLang];
    datePatterns.current = datePatterns[this.translateService.currentLang];
    this.translateSubscription = this.translateService.onLangChange.subscribe((langEv: LangChangeEvent) => {
      validatorPatterns.current = validatorPatterns[langEv.lang];
      amountPatterns.current = amountPatterns[langEv.lang];
      datePatterns.current = datePatterns[langEv.lang];
    });
  }

  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }
}
