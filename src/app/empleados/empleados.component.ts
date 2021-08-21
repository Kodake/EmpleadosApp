import { Component, OnInit } from '@angular/core';
import { Label, MultiLineLabel } from 'ng2-charts';
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
  salaries: Array<number>;
  labels: Array<string>;

  public pageNumber: number = 1;
  public searchText: string = '';
  public pagination: Pagination = new Pagination(1, 0, 5, [5, 10, 20, 25, 50, 100]);

  constructor(private empleadoService: EmpleadoService) { }

  async ngOnInit() {
    this.getListEmpleadosPaginated();
  }

  async getListEmpleadosPaginated() {
    this.empleadoService.getListEmpleadosPaginated(this.searchText, this.pagination).subscribe(data => {
      this.listEmpleados = data.items as Empleado[];
      this.pagination.count = data.count;
      console.log(data);
      

      this.labels = ["Total","Femenino","Masculino"]
      this.salaries = [data.totalSalaries, data.femaleSalaries, data.maleSalaries];
      
      this.empleadoService.setLabels(this.labels);
      this.empleadoService.setSalaries(this.salaries);
    }, error => {
      console.log(error);
    });
  }

  async onPageChange(event) {
    this.pagination.page = event;
    await this.getListEmpleadosPaginated();
  }

  async onPageSizeChange(event) {
    this.pagination.pageSize = event.target.value;
    this.pagination.page = 1;
    await this.getListEmpleadosPaginated();
  }

  async getListEmpleados() {
    await this.empleadoService.getListEmpleados().subscribe(data => {
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