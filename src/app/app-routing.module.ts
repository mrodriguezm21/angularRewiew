import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', children: []},
  {path: 'chars', loadChildren: () => import('./modules/characters/characters.module').then(m => m.CharactersModule)},
  {path: 'posts', component: PostsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
