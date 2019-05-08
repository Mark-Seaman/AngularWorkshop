import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  
  template:  
  `
    <footer>
        Shrinking World Solutions
    </footer>
  `,
  
  styles: [
    `
        footer {
            color: blue;
            padding: 2em;
            text-align: center;
        }
    `]
})


export class FooterComponent {
}
