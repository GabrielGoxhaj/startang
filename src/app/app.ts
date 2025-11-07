import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './feature/parent-component/parent-component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ParentComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})


export class App {
  protected readonly title = signal('Ciao ragazzi, aperitivo???');

  ciclilavarizia = "https://www.ciclilavarizia.it/"
  Fullname: string = "La Varizia Cicli";
  myStyle = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold'
  };
  btnDisabled: boolean = false;
  hColor = 'red';
  hFontSize = '24px';
  isMyDivActive: boolean = true;
  isChecked: boolean = false;
  selectedOption: string = 'red';

  GetFullname() {
    return this.Fullname;
  }
  btnCliccami(firstName: string) {
    this.Fullname = `Benvenuto alla Varizia Cicli, ${firstName}!`;
    this.btnDisabled = !this.btnDisabled;
    this.title.update(cur =>cur + 'Aperitivo a dopo, ora lavoriamo!!!');
  }

  InputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted!');
  }
}
