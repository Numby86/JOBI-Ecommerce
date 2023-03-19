import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginJWT, Login } from './login.model';
import { Observable, tap, ReplaySubject } from 'rxjs';
import { Register } from './register.model';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from './../loading/loading.service';

const API_URL_REGISTER = 'https://nodejs-proyectodb-mpl0haqpi-numby86.vercel.app/user/register';

const API_URL_LOGIN_JWT = 'https://nodejs-proyectodb-mpl0haqpi-numby86.vercel.app/user/login-jwt';

const TOKEN_KEY = 'user-token';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public userLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(
    private http: HttpClient,
    private router: Router,
    private loadingService: LoadingService
  ) { 
    this.userLogged$.next(this.isLogged());
   }

  public registerApiUser(body: Register): Observable<Register>{
    return this.http.post<Register>(`${API_URL_REGISTER}`, body)
  }

  public loginApiUser(body: Login): Observable<LoginJWT>{
    this.loadingService.showLoading();
    return this.http.post<LoginJWT>(`${API_URL_LOGIN_JWT}`, body).pipe(
      tap((res: LoginJWT) => {
        const userStore = JSON.stringify({
          token: res.token,
          id: res.user._id,
          email: res.user.email
        });
        localStorage.setItem(TOKEN_KEY, userStore);
        this.userLogged$.next(true);
        this.router.navigate(['home']);
      }),
      tap(() => this.loadingService.hideLoading())
    )
  }

  public logoutUser(){
    const deleteToken = localStorage.removeItem(TOKEN_KEY);
    this.userLogged$.next(false);
    if(deleteToken !== null){
      this.router.navigate(['home']);
    }
  }

  public isLogged(): boolean {
    const checkToken = localStorage.getItem(TOKEN_KEY);
    if (!checkToken){return false;}
    const validToken = JSON.parse(checkToken)?.token;
    return !!validToken;
  }

  public getToken(): string | null {
    const checkToken = localStorage.getItem(TOKEN_KEY);
    return checkToken ? JSON.parse(checkToken).token : null;
  }

}
