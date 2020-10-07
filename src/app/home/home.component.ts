import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  options: AnimationOptions = {
    path: 'assets/img/hero.json',
    loop: false,
  };
  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: 'auto',
    margin: '0 auto',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
