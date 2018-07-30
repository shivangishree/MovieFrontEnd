import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";
import { Movie } from "../movie";
@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  movies;
  omdbMovie;
  movieTitle = "";
  deleteStatus;
  omdbMovieSave= new Movie;
  movie_id = 1;
  constructor(private movieService: MovieService) {}
    ngOnInit() {
    this.getMovieList();
  }

  getMovieList() {
    this.movieService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
    });
  }
  searchMovie() {
    this.movieService.getMovieOmdb(this.movieTitle).subscribe(data => {
      this.omdbMovie = data;
    });
  }

  deleteMovie(movie) {
    this.movieService.deleteMovie(movie.id).subscribe(data => {
      this.deleteStatus = data;
    });
    this.getMovieList();
    window.location.reload(true);
  }
  saveOMDBMovie(omdb_movie){
      this.omdbMovieSave.id = ++this.movie_id;
      this.omdbMovieSave.title = omdb_movie.Title;
      this.omdbMovieSave.poster = omdb_movie.Poster;
      this.omdbMovieSave.year = omdb_movie.Year;
      this.omdbMovieSave.type = omdb_movie.Type;
      this.movieService.saveMovie(this.omdbMovieSave).subscribe(data => {
      this.omdbMovieSave = data;
  });
  window.location.reload(true);
}
}
