import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { cvMaxValidator } from '@ngx-evry/evry-common';
import { cvMinValidator } from '@ngx-evry/evry-common';
import { cvMaxEqualValidator } from '@ngx-evry/evry-common';
import { cvMinEqualValidator } from '@ngx-evry/evry-common';
import { cvMaxLengthValidator } from '@ngx-evry/evry-common';
import { cvMinLengthValidator } from '@ngx-evry/evry-common';
import { cvLengthValidator } from '@ngx-evry/evry-common';

declare var require:any;
const html = require('./home-page.component.html');

@Component({
  selector: 'home',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  html = html;

  homePageForm: FormGroup;

  ngOnInit() {
    this.homePageForm = new FormGroup({
      'required': new FormControl(null, [Validators.required]),
      'numberInteger': new FormControl(null)
    });
  }

  onSubmit() {
  }
}
