import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterLink, RouterLinkActive,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sucur';
}
