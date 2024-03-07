import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { PostService, Result } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent{
  public posts$: Observable<Result>;

  constructor(private postService: PostService){
    this.posts$ = this.postService.getAllPosts();
  }


}
