import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    

    if (userPrefersLight) {
      this.setThema('light')
    }
    // if (userPrefersDark) {
    //   this.setThema('dark')
    // }

  }
  title = 'JOBI';
  setThema(themeChoise: string) {
   
    document.documentElement.className = themeChoise;
    
  }
 
}
