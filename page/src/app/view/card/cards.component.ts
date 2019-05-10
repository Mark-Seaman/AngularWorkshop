import { Component } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})


export class CardsComponent {
    cards = [];

    onNewCard() {
        var x = this.cards.length + 1;
        this.cards.push({title: "Content Card "+x, body: "Body"});
    }
}
