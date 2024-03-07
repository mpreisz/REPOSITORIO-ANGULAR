import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './post.service';

export const POST_SERVICE_KEY = new InjectionToken<string>('POST_SERVICE_KEY');

@NgModule({
  providers: [PostService,
    {provide: POST_SERVICE_KEY, useValue: 'https://www.omdbapi.com/?s=harry&p=1&apikey=3f24f265'}, // Mock value for MyInterface
  ],
  declarations: [
    PostComponent,
    PostListComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports:[PostComponent, PostListComponent]
})
export class PostModule { }
