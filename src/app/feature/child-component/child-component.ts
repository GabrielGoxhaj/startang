import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  template: `
    <p>
      child-component works! Good morning, {{ parentName }}!
    </p>
  `,
  styles: `p{ color: blue; }`,
})
export class ChildComponent {
@Input() parentName = '';
}
