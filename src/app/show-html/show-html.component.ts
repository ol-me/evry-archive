import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'show-html',
  templateUrl: './show-html.component.html',
  styleUrls: ['./show-html.component.scss']
})
export class ShowHtmlComponent implements OnInit {

  @Input() data: string;
  @ViewChild('rawHtml') rawHtml: ElementRef;

  buttonName = 'Show html';
  visible = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setProperty(this.rawHtml.nativeElement, 'textContent', this.data);
  }

  toggleHtml() {
    if (!this.visible) {
      this.renderer.setStyle(this.rawHtml.nativeElement, 'display', 'block');
      this.visible = true;
      this.buttonName = 'Hide html';
    } else {
      this.renderer.setStyle(this.rawHtml.nativeElement, 'display', 'none');
      this.visible = false;
      this.buttonName = 'Show html';
    }
  }
}
