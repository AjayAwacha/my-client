import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AjayA';
  unusedVariable: string = '';

  constructor(
    private _router: Router
  ) {

  }

  rediret(path: string) {
    this._router.navigate([`/${path}`]);
  }
}
