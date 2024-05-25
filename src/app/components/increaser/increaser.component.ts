import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styleUrls: ['./increaser.component.css'],
})
export class IncreaserComponent {
  //@Input('value') progress: number = 50;
  @Input() progress: number = 50;
  @Output() valueOut: EventEmitter<number> = new EventEmitter();


  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.valueOut.emit(100);
      return (this.progress = 100);
    }
    if (this.progress <= 0 && value <= 0) {
      this.valueOut.emit(0);
      return (this.progress = 0);
    }
    this.valueOut.emit(this.progress + value);
    return (this.progress = this.progress + value);
  }
}
