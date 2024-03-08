import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { POST_SERVICE_KEY, PostService } from './post.service';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [PostComponent, PostListComponent, PostFormComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [PostComponent, PostListComponent],
  providers: [
    PostService,
    {
      provide: POST_SERVICE_KEY,
      useValue: 'https://www.omdbapi.com/?s=harry&p=1&apikey=3f24f265',
    }, // Mock value for MyInterface
  ],
})
export class PostModule {}
