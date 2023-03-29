import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-url-not-found',
  templateUrl: './url-not-found.component.html',
  styleUrls: ['./url-not-found.component.scss']
})
export class UrlNotFoundComponent {

  constructor(
    private router: Router
  ){}

  public backHome(){
    this.router.navigate(['home'])
  }
}
