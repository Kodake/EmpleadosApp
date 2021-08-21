import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet, SingleDataSet } from 'ng2-charts';
import * as ChartDataLabels from "chartjs-plugin-datalabels";

import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  @Input() salaries: number[];
  @Input() labels: Label[];

  // All
  public ChartColors: Color[] = [{ backgroundColor: ['#06d6a0', '#ef476f', '#118ab2'] }];
  public ChartLabels: Label[];
  public ChartData: MultiDataSet = [];
  public ChartPlugins = [ChartDataLabels];
  public ChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        formatter: (value, ctx) => this.getFormat(value, ctx),
        color: "black",
        align: "center",
        font: {
          size: 15
        }
      }
    },
    animation: {
      duration: 2500,
      animateRotate: true
    }
  };

  // Doughnut
  public doughnutChartType: ChartType = "doughnut";

  // Pie
  public pieChartType: ChartType = "pie";

  // Bar
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

  // PolarArea
  public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;
  public polarAreaChartType: ChartType = "polarArea";

  constructor(private empleadoService: EmpleadoService) { }

  async ngOnInit() {
    await this.empleadoService.getLabels().subscribe(lab => {
      this.ChartLabels = lab;
    });
    await this.empleadoService.getSalaries().subscribe(sal => {
      this.ChartData = [sal];
      this.barChartData = [{ data: sal, label: "Serie A" }]
    });
  }

  getFormat(value, ctx) {
    let sum = 0;
    let dataArr = ctx.chart.data.datasets[0].data;
    dataArr.map(data => {
      sum += data;
    });
    let percentage = (value * 100 / sum).toFixed(2) + "%";
    return percentage;
  }
}
