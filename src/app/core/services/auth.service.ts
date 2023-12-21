import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Login, LoginResponse, Register} from "../interface/auth";
import {Observable, tap} from "rxjs";
import {User} from "../interface/user";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  get token(): string | null {
    return localStorage.getItem('token')
  }

  get user(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null
  }

  login(payload: Login): Observable<LoginResponse> {
    return this.post<LoginResponse>('auth/sign-in', payload)
      .pipe(
        tap((response: LoginResponse) => {
          this.setToken(response.token.accessToken)
          this.setUser(response.user)
        })
      )
  }

  register(payload: Register): Observable<User> {
    return this.post<User>('auth/register', payload)
  }

   getUser(): Observable<User> {
    return this.get<User>('users/me');
  }

  update(id: string, data: any): Observable<User> {
    return this.put<User>(`users/update/${id}`, data);
  }

  ChangePassword(data: any): Observable<User> {
    return this.put<User>('users/update-password/', data);
  }

  recovery(email: string): Observable<string> {
    return this.post<string>('auth/recovery', email)
  }

  setToken(token: string) {
    localStorage.setItem('token', token)
  }

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  signOut() {
    localStorage.clear()
  }

}
