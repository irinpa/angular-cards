import {Component, OnInit, Input} from '@angular/core';
import {Card} from '../app.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

    @Input() card: Card
    title: string;
    text: string;

    number = 42;

    array = [1, 1, 2, 3, 5, 8, 13]

    person = {name: 'Irina', info: {
        age: 27, job: 'junior'
    }}

    textColor: string;

    getInfo(): string {
        return 'This is my info :)';
    }

    imgUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';

    disabled = false;

    changeTitle() {
        this.card.title = 'Title has been changed';
    }

    inputHandler(value){
        // const value = event.target.value;
        this.title = value;
    }

    ngOnInit(){
        console.log('ngOnInit has been called!');

        setTimeout(() => {
            this.imgUrl = 'http://icons.iconarchive.com/icons/thesquid.ink/free-flat-sample/256/umbrella-icon.png';
            this.disabled = true;
        }, 3000)
    }


}