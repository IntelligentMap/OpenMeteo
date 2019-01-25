import {Component, Input, NgModule, OnInit} from '@angular/core';
import * as JQuery from 'jquery';
import * as PopperJS from 'popper.js';
import {HeaderSearchComponent} from './search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  @Input() title: String;

  constructor() { }

  ngOnInit() {
    JQuery(function () {
      'use strict';

      JQuery('[data-toggle="offcanvas"]').on('click', function () {
        JQuery('.offcanvas-collapse').toggleClass('open');
      });
    });
  }

  onResize(event) {

  }

}
