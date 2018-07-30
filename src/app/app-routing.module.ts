import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SaveMovieComponent } from './save-movie/save-movie.component';

const routes: Routes =[
{
path:'',
component:MovieComponent
},
{
path:'movie/:id',
component:MovieDetailComponent
},
{
  path:'save_movie',
  component:SaveMovieComponent
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
