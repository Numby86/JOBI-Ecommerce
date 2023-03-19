import { UserServiceService } from './../../services/user/user-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logged: boolean = false;
  public logOut: boolean = false;

  constructor(
    private router: Router,
    private userService: UserServiceService
  ){}

  public ngOnInit(): void {
    this.userService.isLogged();
    this.userService.userLogged$.subscribe((isLogged) => this.logged = isLogged);
  }

  public navigateToList() {
    this.router.navigate(['home'])
  }

  public addButton(){
    this.logOut = true;
  }

  public cerrarSesion(){
    this.userService.logoutUser();
  }

}
