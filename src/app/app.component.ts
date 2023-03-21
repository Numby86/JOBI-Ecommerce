import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    if (userPrefersDark) {
      this.setThema('dark')
    }
    if (userPrefersLight) {
      this.setThema('light')
    }
  }
  title = 'JOBI';
  setThema(t: string) {
   
    document.documentElement.className = t;
  }
 
}
