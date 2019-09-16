import { Component } from '@angular/core';

export interface Card{
  title: string;
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-cards';

  toggle = true;

  cards: Card[] = [
    {title: 'Card 1', text: 'This is card 1'},
    {title: 'Card 2', text: 'This is card number 2'},
    {title: 'Last One', text: 'This is the last card'}
  ]

  toggleCards(){
    this.toggle = !this.toggle;
  }
}
