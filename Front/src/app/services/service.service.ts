import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuariointerface } from '../models/usuario-interface';
import { map } from "rxjs/operators";
import { AuthService } from './auth.service';


@Injectable()

export class ServiceService {

  constructor(private consulta: HttpClient, private authService: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });
  
  // mensaje1(){
  //   return "AQUI";
  // }

  obtenerTodos(): Observable<usuariointerface> {
    return this.consulta.get<usuariointerface>('http://localhost:3000/users').pipe(map((data: any) => data));
  }


}
