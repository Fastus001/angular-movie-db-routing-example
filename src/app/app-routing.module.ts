import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from './pages/movies/movies.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {CategoriesComponent} from './pages/categories/categories.component';
import {MovieDetailsComponent} from './pages/movies/movie-details/movie-details.component';
import {MoviesInCategoryComponent} from './pages/categories/movies-in-category/movies-in-category.component';
import {YearsComponent} from './pages/years/years.component';
import {MovieComponent} from './pages/years/movie/movie.component';

const  routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/:id', component: MovieDetailsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'category/:category', component: MoviesInCategoryComponent},
  {path: 'years',component: YearsComponent},
  {path: 'movies/:year',component: MovieComponent},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
