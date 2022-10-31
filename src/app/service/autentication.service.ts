import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {
  currentUserSubject: BehaviorSubject<Usuario>;
  currentUser: Observable<Usuario>;
  returnUrl: string="";

  baseURL = "https://api.realworld.io/api/users/login";


  constructor(private http: HttpClient, private router:Router) {
    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currenUserValue(): Usuario {
    return this.currentUserSubject.getValue();
  }

  login(usuario: Usuario) {
    return this.http.post<any>(this.baseURL, usuario)
    .pipe(map(data => {
      localStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
  }


}
