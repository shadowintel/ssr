import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ButterCMSService } from '../../_services';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss']
})
export class BlogPostListComponent implements OnInit {

  public posts: any[];
  public currentPage: any;
  public Currentpage: any;
  public last_Page: any;
  public page: any = 1;
  public collectionSize: any;
  public next_page: any;
  public previous_page: any;
  public count: any;

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.pageLoad(this.page);
  }

  pageLoad(page) {
    this.spinner.show('loading...');
    console.log(page);
    ButterCMSService.post.list({
      page: page,
      page_size: 10
    }).then((res) => {
      this.posts = res.data.data;
      if (res.data.meta.count % 10 !== 0) {
        this.collectionSize = (Math.floor(res.data.meta.count / 10) + 1) * 10;
      } else {
        this.collectionSize = res.data.meta.count;
      }
      console.log('post list: ', this.posts, this.collectionSize)
    }).finally(() => {
      this.spinner.hide();
    });
  }

  pageChange(event) {
    console.log(event);
    this.pageLoad(event);
  }

}
