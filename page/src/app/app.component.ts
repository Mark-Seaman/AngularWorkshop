import { Component } from '@angular/core';
import { HeaderComponent } from './view/page/header.component';
import { FooterComponent } from './view/page/footer.component';
import { MainComponent } from './main.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {

    // Header
    title = 'Page Project Demo';
    subtitle = 'Angular Learning';
    logo = 'assets/SWS_Logo_200.jpg';
    header = new HeaderComponent();
    
    // Footer
    footerText = 'Shrinking-World.com';
    footerLink = 'https://shrinking-world.com';
    footer = new FooterComponent();
    
    // Main
    main = new MainComponent();
}
