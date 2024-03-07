import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POST_SERVICE_KEY } from './post.module';

export interface Result {
  Search: Post[];
}

export interface Post {
  Title?: string;
  Year?: number;
  Poster?: string;
}

@Injectable()
export class PostService {
  constructor(
    @Inject(POST_SERVICE_KEY) public serviceUrl: string,
    private http: HttpClient
  ) {
    console.log(this.serviceUrl);
  }
  //@Inject(POST_SERVICE_KEY) public serviceUrl: string
  public getAllPosts(): Observable<Result> {
    return of({ Search: [] });
    //return this.http.get(this.serviceUrl) as Observable<Result>;
  }
}
