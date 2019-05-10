import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Input() public title: string;
    @Input() public subtitle: string;
    @Input() public logo: string;
}
