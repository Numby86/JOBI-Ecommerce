import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    const toggleMenuElement = document.getElementById('toggle-menu');
    const mainMenuElement = document.getElementById('header__nav_ul');

    toggleMenuElement?.addEventListener('click', () => {
      mainMenuElement?.classList.toggle('header__nav_ul--show');
    });
    
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
