import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {
  protected readonly title = signal('Ciao ragazzi, aperitivo???');
  ciclilavarizia = 'https://www.ciclilavariazia.it/';
  Fullname: string = 'La Varizia Cicli';
  selectedOption: string = 'red';
  myStyle = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold',
  };
  btnDisabled: boolean = false;
  hColor = 'red';
  hFontSize = '24px';
  isMyButtonActive: boolean = true;
  isMyDivActive: boolean = true;
  isChecked: boolean = false;

  GetFullName() {
    return this.Fullname;
  }
  btnCliccami(firstName: string) {
    this.Fullname = `Benvenuto alla Varizia Cicli, ${firstName}!`;
    this.btnDisabled = !this.btnDisabled;
  }
  onSubmit(event: Event) {
    event.preventDefault();
  }
  InputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
  }
}
