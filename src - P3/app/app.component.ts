import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  str: string = 'Marvellous Infosystems';

  public fun(): void {
    this.str = 'Educating for Better tomorrow';
  }
}
