import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  @Input() Movies: Movie[] = [];
  @Output() loadMoreMovies = new EventEmitter();

  slidesOpt = {
    slidesPerView: 3,
    freeMode : true,
    spaceBetween: -25
  };

  constructor() { }

  loadMore(){
    this.loadMoreMovies.emit();
  }

  ngOnInit() {}

}
