import { Component, Input } from '@angular/core';

@Component({
    
    selector: 'app-footer',
  
    template:  
      `
        <footer>
            <a href="{{ url }}">{{ text }}</a>
        </footer>
      `,
  
})


export class FooterComponent {
    @Input() public text: string;
    @Input() public url: string;
}
