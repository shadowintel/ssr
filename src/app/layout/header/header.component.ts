import { ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private ref: ChangeDetectorRef,
    private renderer: Renderer2
  ) {
    this.router.events.subscribe((url: any) => {
      this.ref.detectChanges();
    });
  }

  scrollToTarget(idName: string) {
    setTimeout(() => {
      const element = this.renderer.selectRootElement(`#${idName}`, true); // true to indicate that you will preserve the content
      element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  ngOnInit(): void {
  }

  removeclass(idName: string) {
    $('body').removeClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
    $('.mobile-nav-overly').fadeOut();
    if(idName) {
      this.scrollToTarget(idName);
    }
  }

}
