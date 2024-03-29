import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Empleado } from '../models/empleado';
import { PageRequest } from '../models/pageRequest';
import { Pagination } from '../models/pagination';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  myAppUrl = 'https://localhost:44309/';
  myApiUrl = 'api/Empleado/';
  list: Empleado[];
  private salaries$ :BehaviorSubject<Array<number>> = new BehaviorSubject<Array<number>>([]);
  private labels$ :BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>([]);

  constructor(private http: HttpClient) { }
  
  setLabels(labels: Array<string>) {
    this.labels$.next(labels);
  }

  getLabels() {
    return this.labels$;
  }

  setSalaries(salaries: Array<number>) {
    this.salaries$.next(salaries);
  }

  getSalaries() {
    return this.salaries$;
  }

  getListEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.myAppUrl + this.myApiUrl);
  }

  getListEmpleadosPaginated(searchText: string, pagination: Pagination): Observable<PageRequest<Empleado>> {
    return this.http.get<PageRequest<Empleado>>(this.myAppUrl + this.myApiUrl + 'list/' + '?searchText=' + searchText + '&&page=' + pagination.page + '&&pageSize=' + pagination.pageSize);
  }
}
