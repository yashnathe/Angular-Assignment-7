import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular_Assignment_7';

  public fun(): string {
    return 'Marvellous Infosystems';
  }
}
