import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostDetailsComponent } from './blog-post-details/blog-post-details.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../_shared/material.module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
const routes = [
  {
    path: 'list',
    component: BlogPostListComponent
  },
  {
    path: 'list/:slug',
    component: BlogPostDetailsComponent
  }
]

@NgModule({
  declarations: [BlogPostListComponent, BlogPostDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgbPaginationModule,
    RouterModule.forChild(routes),
  ]
})
export class BlogModule { }
