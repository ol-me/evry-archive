import { Component } from '@angular/core';

declare var require: any;
const html = require('./footer-view.component.html');

@Component({
  selector: 'app-footer-view',
  templateUrl: './footer-view.component.html',
  styleUrls: ['./footer-view.component.scss']
})
export class FooterViewComponent {

  html = html;

  userId = 'E213709';
}
