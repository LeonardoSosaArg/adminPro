import { Component, Input } from '@angular/core';
import {
  ChartData,
  ChartDataset,
  ChartEvent,
  ChartOptions,
  ChartType,
} from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  public firstGraficaLabels: string[] = [
    'Mouses',
    'Keyboards',
    'Motherboards',
    'Headphones',
  ];

  public secondGraficaLabels: string[] = [
    'Messi',
    'Kylian',
    'Reus',
    'Doku',
  ];

  public firstGraficaData: number[] = [300, 500, 100, 200];
  public secondGraficaData: number[] = [200, 100, 400, 250];
}
