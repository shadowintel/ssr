import { Component, OnInit, Renderer2 } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import * as AOS from 'aos';

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
  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    AOS.init();
  }

  scrollToTarget(idName: string) {
    const element = this.renderer.selectRootElement(`#${idName}`, true); // true to indicate that you will preserve the content
    element.scrollIntoView({ behavior: 'smooth' });
  }

}
