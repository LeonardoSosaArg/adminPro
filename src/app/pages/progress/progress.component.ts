import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  firstProgress: number = 50;
  secondProgress: number = 30;

  get getFirstProgress() {
    return `${this.firstProgress}%`;
  }

  get getSecondProgress() {
    return `${this.secondProgress}%`
  }

  changeValueChild(value: number){
    console.log(value)
  }

}
