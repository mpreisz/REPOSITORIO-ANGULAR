import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { POST_SERVICE_KEY } from './post.module';

export interface Result{
  Search: Post[];
}

export interface Post{
  Title?: string;
  Year?: number;
  Poster?: string;
}

@Injectable(
  {providedIn: 'root'}
)
export class PostService {

  constructor(@Inject(POST_SERVICE_KEY) public serviceKey: string, private http: HttpClient) { }
  //@Inject(POST_SERVICE_KEY) public serviceKey: string
public getAllPosts(){
return this.http.get(this.serviceKey) as Observable<Result>;
}


}
