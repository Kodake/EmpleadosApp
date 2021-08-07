import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/Empleado';
import { Pagination } from '../models/pagination';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  generoSelec = 'Todos';
  listEmpleados: Empleado[] = [];
  salaries: any;

  public pageNumber: number = 1;
  public searchText: string = '';
  public pagination: Pagination = new Pagination(1, 0, 5, [5, 10, 20, 25, 50, 100]);

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.getListEmpleadosPaginated();
  }

  getListEmpleadosPaginated() {
    this.empleadoService.getListEmpleadosPaginated(this.searchText, this.pagination).subscribe(data => {
      this.listEmpleados = data.items as Empleado[];
      this.pagination.count = data.count;

      const SALARIES = [
        {
          "name": "Total",
          "value": data.totalSalaries
        },
        {
          "name": "Femenino",
          "value": data.femaleSalaries
        },
        {
          "name": "Masculino",
          "value": data.maleSalaries
        }
      ];

      this.salaries = SALARIES;

    }, error => {
      console.log(error);
    });
  }

  onPageChange(event) {
    this.pagination.page = event;
    this.getListEmpleadosPaginated();
  }

  onPageSizeChange(event) {
    this.pagination.pageSize = event.target.value;
    this.pagination.page = 1;
    this.getListEmpleadosPaginated();
  }

  getListEmpleados() {
    this.empleadoService.getListEmpleados().subscribe(data => {
      this.listEmpleados = data;
    });
  }

  getEmpleados(): number {
    return this.listEmpleados.length;
  }

  getMasculinos(): number {
    return this.listEmpleados.filter(list => list.genero === 'Masculino').length;
  }

  getFemeninos(): number {
    return this.listEmpleados.filter(list => list.genero === 'Femenino').length;
  }

  generoSeleccionado(genero: string): void {
    this.generoSelec = genero;
  }

}
