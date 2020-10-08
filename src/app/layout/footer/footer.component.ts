import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
  }

  scrollToTarget(idName: string) {
    console.log('header')
    const element = this.renderer.selectRootElement(`#${idName}`, true); // true to indicate that you will preserve the content

    element.scrollIntoView({ behavior: 'smooth' });
  }
}
