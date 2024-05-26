import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrl: './donut.component.css',
})
export class DonutComponent implements OnInit {
  @Input() title: string = 'Titulo por defecto';
  @Input() labelsDonut: string[] = [
    'Default value',
    'Default value',
    'Default value',
    'Default value',
  ];
  @Input() dataNumbers: number[] = [100, 100, 100, 100];
  @Input() backgroundColors: string[] = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'];

  ngOnInit() {
    this.pieChartData.labels = this.labelsDonut;
    this.pieChartData.datasets.push({
      data: this.dataNumbers,
      backgroundColor: this.backgroundColors,
    });
  }

  public pieChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
  };

  public pieChartData: ChartData<'doughnut', number[], string> = {
    labels: [],
    datasets: [],
  };
}
