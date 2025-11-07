import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Commondata {
  FullName: string = 'Claudio Orloff';

  ComputeMultiplication(a: number, b: number): number {
    return a * b;
  }
  AlertFullName(msg: string): void {
    alert(this.FullName + ' says: ' + msg);
  }
}
