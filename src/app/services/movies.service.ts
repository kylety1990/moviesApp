import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { respMovieDb } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const url = environment.url;
const apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private recentPage = 0;
  private popularPage = 0;
  constructor(private http: HttpClient) { }

  private executeQuery<T>( query: string){
    query = url + query;
    query +=  `&api_key=${apiKey}&language=es&include_image_language=es`;
    return this.http.get<T>(query);
  }

  getFeature(){

    this.recentPage++;
    const day = new Date();
    const lastDay = new Date(day.getFullYear(), day.getMonth() + 1, 0 ).getDate();
    const month = day.getMonth() + 1;
    let monthString;

    if (month < 10){
      monthString = '0' + month;
    }else{
      monthString = month;
    }
    console.log(monthString);
    const first = `${day.getFullYear()}-${monthString}-01`;
    const fin = `${day.getFullYear()}-${monthString}-${lastDay}`;
    return this.executeQuery<respMovieDb>(`/discover/movie?primary_release_date.gte=${first}&primary_release_date.lte=${fin}&page=${this.recentPage}`);
  }
  getPopularMovie(){

    this.popularPage++;

    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularPage}`;
    return this.executeQuery<respMovieDb>(query);

  }
}
