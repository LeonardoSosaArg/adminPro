import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncreaserComponent } from './increaser/increaser.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { DonutComponent } from './donut/donut.component';



@NgModule({
  declarations: [
    IncreaserComponent,
    DonutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports:[
    IncreaserComponent,
    DonutComponent
  ]
})
export class ComponentsModule { }
