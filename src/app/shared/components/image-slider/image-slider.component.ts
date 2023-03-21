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

  constructor(){
    this.slides = [
      { url: '/assets/public/img/bestSeller_book.jpg', title: 'image1' },
      { url: '/assets/public/img/bestSeller_garment.jpg', title: 'image2' },
      { url: '/assets/public/img/bestSeller_videogames.jpg', title: 'image3' },
      { url: '/assets/public/img/bestSeller_videogames_2.jpg', title: 'image4' },
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
    this.timeoutId = window.setTimeout(() => this.goToNext(), 6000);
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
