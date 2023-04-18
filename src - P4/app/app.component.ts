import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  str: string = 'MaRvElLoUs InFoSyStEmS';

  toUpper(): void {
    this.str = this.str.toUpperCase();
  }

  toLower(): void {
    this.str = this.str.toLowerCase();
  }
}
