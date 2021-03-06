import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';
// import { Options } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
url="http://localhost:8080";
movieOMDB;
movie;
  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(this.url+'/getMovies');
  }

  saveMovie(movie:Movie):Observable<Movie>{
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    return this.http.post<Movie>(this.url+'/saveMovie',movie);
  }

  getMoviesById(id){  
  return this.http.get(this.url+'/getMovie?id='+id);	       
   }
   
  getMovieOmdb(title:string){
   return this.http.get('http://www.omdbapi.com/?t='+title+'&apikey=6db283eb');
   }

  deleteMovie(id){
     return this.http.delete('http://localhost:8080/deleteMovie/'+id);
     }
  
  
  }
