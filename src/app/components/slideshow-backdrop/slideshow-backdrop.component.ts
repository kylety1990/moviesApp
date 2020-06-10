import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() Movies: Movie[] = [];
  @Output() loadMoreMovies = new EventEmitter();

  slidesOpt = {
    slidesPerView: 1.2,
    freeMode : true
  };
  constructor() { }

  ngOnInit() {}

  loadMore(){
    this.loadMoreMovies.emit();
  }

}
