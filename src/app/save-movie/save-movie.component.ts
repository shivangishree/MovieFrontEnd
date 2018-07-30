import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-save-movie',
  templateUrl: './save-movie.component.html',
  styleUrls: ['./save-movie.component.css']
})
export class SaveMovieComponent implements OnInit {

  movie = {
    id: 0,
    title: "title",
    year: "year",
    poster: "poster",
    type: "type"
  };
  constructor(private movieService:MovieService) { }

  ngOnInit() {
  }
 addMovie(){
  this.movieService.saveMovie(this.movie).subscribe(data => {
    this.movie = data;
  });
 }
}

