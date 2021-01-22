import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/Empleado';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  generoSelec = 'Todos';
  listEmpleados: Empleado[] = [];
  public pageNumber: number = 1;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.getListEmpleados();
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
    return this.listEmpleados.filter( list => list.genero === 'Masculino').length;
  }

  getFemeninos(): number {
    return this.listEmpleados.filter( list => list.genero === 'Femenino').length;
  }

  generoSeleccionado(genero: string): void {
    this.generoSelec = genero;
  }

}
