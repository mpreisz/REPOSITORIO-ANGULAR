import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostModule } from './post/post.module';

const routes: Routes = [
  {
    path: 'post',
    loadChildren: () => PostModule,
  },
  { path: '', redirectTo: 'post', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
