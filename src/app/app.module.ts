import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostModule } from './post/post.module';

export const POST_SERVICE_KEY = new InjectionToken<string>('POST_SERVICE_KEY');

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PostModule],
  // providers: [
  //   {
  //     provide: POST_SERVICE_KEY,
  //     useValue: 'https://www.omdbapi.com/?s=harry&p=1&apikey=3f24f265',
  //   },
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
