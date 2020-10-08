import { Component } from '@angular/core';
declare const $: any;
// import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ransomware-leak';
  ngOnInit() { }

  removeclass() {
    $('body').removeClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
    $('.mobile-nav-overly').fadeOut();
  }
}
