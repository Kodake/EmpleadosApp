import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  myAppUrl = 'https://localhost:44309/';
  myApiUrl = 'api/Empleado/';
  list: Empleado[];

  constructor(private http: HttpClient) { }

  getListEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.myAppUrl + this.myApiUrl);
  }
}
