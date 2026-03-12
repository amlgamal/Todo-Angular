import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports:[CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  styleUrls: ['./app.component.css'],
  host: {
    class: 'd-flex flex-column m-0 align-items-stretch',
    style: 'min-height: 100vh;',
  },
})
export class App {
  protected readonly title = signal('project-name');
}
