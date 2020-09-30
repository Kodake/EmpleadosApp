import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {
  
  radioButtonSeleccionado = 'Todos';
  @Input() todos: number;
  @Input() masculino: number;
  @Input() femenino: number;
  @Output() radioButton: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  radioButtonChanged(): void {
    this.radioButton.emit(this.radioButtonSeleccionado);
  }

}
