import { Component } from '@angular/core';
import { ContentComponent } from './view/content/content.component'; 


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})

export class MainComponent {
    content = "<app-content></app-content>";
   /* new ContentComponent().innerText;*/
}
