import { ProductsService } from './../../../core/services/products/products.service';
import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { interval, Observable, startWith, Subject, switchMap, timer } from 'rxjs';
import { SlideInterface } from './models/slide.models';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit, OnDestroy{

  // @Input() slides: SlideInterface[] = [];
 
  public slides: SlideInterface[];

  constructor( 
    private productsService: ProductsService
  ){
    this.slides = [
      { url: '/assets/public/img/slide_book_2.jpg', title: 'image1'},
      { url: '/assets/public/img/slide_garment_3.jpg', title: 'image4' },
      { url: '/assets/public/img/slide_videogames_1.jpg', title: 'image4' },
      { url: '/assets/public/img/slide_toy_1.jpg', title: 'image4' }, 
      { url: '/assets/public/img/slide_book_1.jpg', title: 'image2' },
      { url: '/assets/public/img/slide_garment_2.jpg', title: 'image4' },
      { url: '/assets/public/img/slide_videogames_2.jpg', title: 'image4' }, 
      { url: '/assets/public/img/slide_toy_2.jpg', title: 'image4' },     
      { url: '/assets/public/img/slide_book_3.jpg', title: 'image3' },
      { url: '/assets/public/img/slide_garment_1.jpg', title: 'image4' }, 
      { url: '/assets/public/img/slide_videogames_3.jpg', title: 'image4' }, 
      { url: '/assets/public/img/slide_toy_3.jpg', title: 'image4' }, 
      
    ]
  }
   

  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
    this.resetTimer();
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

}
