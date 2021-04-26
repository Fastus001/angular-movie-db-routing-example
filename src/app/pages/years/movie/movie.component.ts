import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from '../../../models/movie';
import {HttpService} from '../../../services/http.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(private http: HttpService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movies = this.route.paramMap.pipe(
      switchMap((params)=>
      this.http.getMoviesFromYear(params.get('year')))
    );
  }

}
