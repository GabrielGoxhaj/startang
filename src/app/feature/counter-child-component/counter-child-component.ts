import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-child-component',
  imports: [],
  template: `
    <button (click)="incrementCount()">Incremento 1 al padre</button>
  `,
  styles: `button { font-weight: bold; }`,
})
export class CounterChildComponent {
  @Output() countChange = new EventEmitter<number>();
  private count = 0;

  incrementCount() {
    this.count++;
    this.countChange.emit(this.count);
  }
}
