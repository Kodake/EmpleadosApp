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
  // listEmpleados: Empleado[] = [
  //   { legajo: 1, nombre: 'Rudy', apellido: 'Florentino', genero: 'Masculino', salario: 100000},
  //   { legajo: 2, nombre: 'Juan', apellido: 'Reyes', genero: 'Masculino', salario: 110000},
  //   { legajo: 3, nombre: 'Aarón', apellido: 'Florentino', genero: 'Masculino', salario: 95000},
  //   { legajo: 4, nombre: 'Rosa', apellido: 'Castro', genero: 'Femenino', salario: 80000},
  //   { legajo: 5, nombre: 'Alicia', apellido: 'Olivares', genero: 'Femenino', salario: 75000},
  //   { legajo: 6, nombre: 'María', apellido: 'Méndez', genero: 'Femenino', salario: 60000},
  //   { legajo: 7, nombre: 'Rafaela', apellido: 'Menéndez', genero: 'Femenino', salario: 55000},
  //   { legajo: 8, nombre: 'Pedro', apellido: 'Castaños', genero: 'Masculino', salario: 55000}
  // ];

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
