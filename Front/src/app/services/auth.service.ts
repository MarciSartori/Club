import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { usuariointerface } from '../models/usuario-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  registerUser(nombre: String) {
    const url = 'http://localhost:3000/Users';
    return this.http.post(url, { nombre },
      {headers: this.headers}
    ).pipe(map(data => data));
  }

  setUser() {
    
  }

  getToken() {
    return "token";
  }
}
