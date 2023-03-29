import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {

  public shouldShowButton?: boolean = false;
 public scrollHeight: number = 500;

  constructor(@Inject(DOCUMENT) private document: Document) {}
 
  @HostListener('window: scroll')
  public onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;

    this.shouldShowButton = (yOffSet || scrollTop) > this.scrollHeight;
    }

    public onScrollTop(): void {
      this.document.documentElement.scrollTop = 0
    }

}
