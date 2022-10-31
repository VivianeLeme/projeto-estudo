import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
baseURL = "https://api.realworld.io/api/users";

  constructor(private http:HttpClient) { }

public cadastrar(data:any):Observable<any>{
  return this.http.post(this.baseURL, data);
}
}
