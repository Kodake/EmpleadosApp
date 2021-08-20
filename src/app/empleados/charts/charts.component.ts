import { Component, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

  salaries: any;
  @Input('salaries')
  set _salaries(data: any) {
    this.salaries = data;
  }

  // Doughnut
  public doughnutChartLabels: Label[] = [
    "Total",
    "Femenino",
    "Masculino"
  ];
  public doughnutChartData: MultiDataSet = [[350, 450, 100]];
  public doughnutChartType: ChartType = "doughnut";

  // Pie
  public pieChartLabels: Label[] = [
    "Download Sales",
    "In-Store Sales",
    "Mail-Order Sales"
  ];
  public pieChartData: MultiDataSet = [[350, 450, 100]];
  public pieChartType: ChartType = "pie";

  // Bar
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" }
  ];

  // PolarArea
  public polarAreaChartLabels: Label[] = [
    "Download Sales",
    "In-Store Sales",
    "Mail Sales",
    "Telesales",
    "Corporate Sales"
  ];
  public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = "polarArea";

  constructor() { }
}
