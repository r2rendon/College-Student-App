import { Component } from '@angular/core';

@Component({
  selector: 'clases-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})

export class ClasesAppComponent {
  title = 'LabUxNg';
}
