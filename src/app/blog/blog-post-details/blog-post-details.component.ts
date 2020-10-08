import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ButterCMSService } from '../../_services'
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-blog-post-details',
  templateUrl: './blog-post-details.component.html',
  styleUrls: ['./blog-post-details.component.scss']
})
export class BlogPostDetailsComponent implements OnInit {

  constructor(
    protected route: ActivatedRoute) {
  }

  protected slug$: Observable<string>;
  public post = {
    meta: null,
    data: null
  };

  ngOnInit() {
    this.slug$ = this.route.paramMap
      .pipe(
        map(params => (params.get('slug')))
      );

    this.slug$.pipe(
      take(1))
      .subscribe(slug => {
        ButterCMSService.post.retrieve(slug)
          .then((res) => {
            this.post = res.data;
          }).catch((res) => {
            console.log(res);
          });
      });
  }

}
