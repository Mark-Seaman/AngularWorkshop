import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { MainComponent } from './main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'Page Project Demo';
  header = new HeaderComponent();
  footer = new FooterComponent();
  main = new MainComponent();
}
