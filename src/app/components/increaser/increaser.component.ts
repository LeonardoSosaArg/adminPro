import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styleUrls: ['./increaser.component.css'],
})
export class IncreaserComponent implements OnInit {
  //@Input('value') progress: number = 50;
  @Input() btnClass: string = 'btn-primary';
  @Input() progress: number = 50;
  @Output() valueOut: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

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

  onChange(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else this.progress = newValue;
    this.valueOut.emit(this.progress);
  }

  isInvalidProgress(): boolean {
    return this.progress > 100 || this.progress < 0;
  }
}
