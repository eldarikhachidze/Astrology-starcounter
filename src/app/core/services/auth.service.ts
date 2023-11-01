import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Login, LoginResponse, Register} from "../interface/auth";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {User} from "../interface/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  private viewMode = new BehaviorSubject<string>('add'); // default value is 'add'
  currentViewMode = this.viewMode.asObservable();

  changeViewMode(mode: string) {
    this.viewMode.next(mode);
  }
  update(id: number, userData: any): Observable<any> {
    return this.put(`/users/update/${id}`, userData);
  }

  getUser(userId: number): Observable<any> {
    return this.get('/users/me');
  }

  get token(): string | null {
    return localStorage.getItem('token')
  }

  get user(): string | null {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user): null
  }
  login(payload: Login): Observable<LoginResponse> {
    return this.post<LoginResponse>('auth/sign-in', payload)
      .pipe(
        tap((response:LoginResponse) => {
          this.setToken(response.token.accessToken)
          this.setUser(response.user)
        })
      )
  }

  register(payload: Register): Observable<User> {
    return this.post<User>('auth/register', payload)
  }

  recovery(email: string ): Observable<string> {
    return this.post<string>('auth/recovery', email)
  }

  setToken(token:string) {
    localStorage.setItem('token', token)
  }

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  signOut() {
    localStorage.clear()
  }
}
