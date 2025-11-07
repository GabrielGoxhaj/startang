import { Component } from '@angular/core';
import { CounterChildComponent } from '../counter-child-component/counter-child-component';
import { Commondata } from '../../shared/services/commondata';

@Component({
  selector: 'app-counter-parent-component',
  imports: [CounterChildComponent],
  template: `
      <app-counter-child-component (countChange)="updateCount($event)"></app-counter-child-component>
      <p>Contatore Attuale: {{ totalCount }}, Benvenuto {{Nominativo}}, il valore odierno è: {{commonData.ComputeMultiplication(2, 3)}}</p>
      <br>
      <button (click)="commonData.FullName = 'Zagor TeNay'">Aggiorna FullName su Service</button>
      <button (click)="commonData.AlertFullName('Ciao a tutti!')">Invia Messaggio dal Service</button>
  `,
  styles: `p{ font-weight: bold; }`,
})
export class CounterParentComponent {
  constructor(public commonData: Commondata) {
    this.Nominativo = this.commonData.FullName;
  }

  totalCount = 0;
  Nominativo: string = '';


  updateCount(countValue: number) {
    console.log('Ricevuto conteggio dal figlio:', countValue);
    this.totalCount += countValue;
  }
}
