import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Ciao ragazzi, aperitivo???');
  ciclilavarizia = 'https://www.ciclilavariazia.it/';
  Fullname: string = 'La Varizia Cicli';
  myStyle = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold',
  };
  btnDisabled: boolean = false;
  GetFullName() {
    return this.Fullname;
  }
  btnCliccami(firstName: string) {
    this.Fullname = `Benvenuto alla Varizia Cicli, ${firstName}!`;
    return this.Fullname;
  }
  onSubmit(event: Event){
    
  }
  InputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
  }
}
