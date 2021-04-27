import {Component} from '@angular/core';
import {HttpMoviesService} from '../../services/http-movies.service';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
})
export class HttpTestComponent {
  constructor(private  http: HttpMoviesService) {}

  get() {
    this.http.getMovies().subscribe();
  }

  post() {
    const movie: Movie = {
      country: 'Poland',
      director: 'Marek Brodzki',
      category: 'Fantasy',
      plot: 'Zabójca potworów musi wybrać mniejsze zło.',
      poster: null,
      year: '2001',
      title: 'Wiedźmin',
      imdbRating: '10.0',
    };
    this.http.postMovie(movie).subscribe();
  }

  put() {}

  patch() {}

  delete() {}
}
