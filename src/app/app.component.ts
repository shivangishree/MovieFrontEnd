import { Component } from "@angular/core";
import { Movie } from "./movie";
import { MovieService } from "./movie.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  movies;
  movie2;
  movie = {
    id: 2,
    title: "a",
    year: "b",
    poster: "c",
    type: "d"
  };
  constructor(private movieService: MovieService) {}
values='1';
  ngOnInit() {
    // this.movieService.getMovies().subscribe((data: Movie[]) => {
    //   this.movies = data;
    // });
    this.movieService.saveMovie(this.movie).subscribe(data => {
      this.movie2 = data;
    });
    // this.movieService.getMoviesById().subscribe(data =>{
    //   this.movie2 = data;
    // }

    // )
  }

  onKey(event: any) { // without type info
    this.values += event.target.value ;
  }
}
