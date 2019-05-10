import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent }     from './app.component';
import { MainComponent }    from './main.component';
import { HeaderComponent }  from './view/page/header.component';
import { FooterComponent }  from './view/page/footer.component';
import { ContentComponent } from './view/content/content.component';
import { CardsComponent }   from './view/card/cards.component';
import { CardComponent }    from './view/card/card.component';
import { DocComponent }     from './doc/doc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ContentComponent,
    CardComponent,
    DocComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
