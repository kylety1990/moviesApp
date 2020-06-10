import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import {  Movie } from '../interfaces/interfaces';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  rencentMovies: Movie[] = [];
  popularMovies: Movie[] = [];

  constructor(private ms: MoviesService) {}

  ngOnInit(): void {
    this.loadNewsMovies();
    this.loadPopularMovies();
  }

  loadMore(){
    this.loadPopularMovies();
  }
  loadMoreRecent(){
    this.loadNewsMovies();
  }

  loadPopularMovies(){
    this.ms.getPopularMovie().subscribe((resp) => {

      const array = [...this.popularMovies, ...resp.results];
      this.popularMovies = array;
      console.log(this.popularMovies);
    });
  }

  loadNewsMovies(){
    this.ms.getFeature().subscribe((
      resp) => {
        const array = [...this.rencentMovies, ...resp.results];
        this.rencentMovies = array;
        console.log(this.rencentMovies);
    });
  }

}
