import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { MainComponent } from './main.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {

    // Settings values
    title = 'Page Project Demo';
    subtitle = 'Angular Learning';
    logo = 'assets/SWS_Logo_200.jpg';
    header = new HeaderComponent();
    
    footerText = 'Shrinking-World.com';
    footerLink = 'https://shrinking-world.com';
    footer = new FooterComponent();
    
    main = new MainComponent();
}
