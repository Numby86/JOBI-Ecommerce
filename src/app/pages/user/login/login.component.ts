import { UserServiceService } from './../../../core/services/user/user-service.service';
import { LoginJWT, Login } from '../../../core/services/user/login.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public logForm?: FormGroup;

  public userError?: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private router: Router
  ){

    const email = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    this.logForm = this.fb.group({

      email: new FormControl('', [Validators.required, Validators.pattern(email)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(12)])
    })
  }

  public sendFormulario (){

    if(!this.logForm?.valid){return;}
    const user: Login = this.logForm?.value;

    this.userService.loginApiUser(user).subscribe({
      next: (res) => {this.router.navigate(['home'])
      },
      error: (err) => {
        this.userError = err.error;
        this.logForm?.reset()
      } 
    });
  }

  public goToRegister (){
    this.router.navigate(['register'])
  }

}
