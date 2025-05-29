import { Component } from '@angular/core';
import { ColorButtonComponent } from './color-button/color-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ColorButtonComponent],
  template: '<app-color-button></app-color-button>'
})
export class AppComponent { }