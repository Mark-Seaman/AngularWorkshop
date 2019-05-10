import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})


export class ContentComponent{

    @Input() public html: string;
    
    cards = [];

    onNewCard() {
        var x = this.cards.length + 1;
        this.cards.push({title: "Content Card "+x, body: "Body"});
    }
}
