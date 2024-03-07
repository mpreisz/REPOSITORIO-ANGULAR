import { Component, Input } from '@angular/core';
import { Post } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  @Input() post: Post = {};
  isShowMore: boolean = false;

  onClickShow() {
  this.isShowMore = !this.isShowMore
  }

  }
