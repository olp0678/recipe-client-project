import {Component,Input, OnInit} from '@angular/core';
import {About} from '../../components/interfaces/About';
import constants from '../app.constants';

@Component({
    selector: 'about',
    template: require('./about.html'),
    styles: [require('./about.scss')],
})
export class AboutComponent implements OnInit {
    about: About;
    static parameters = [];
    constructor() {
        this.about = constants.about;
    }

    ngOnInit() {
    }
}

@Component({
    selector: 'about-child',
    template: `
        <div class="col-lg-12">
        Author Email: {{email}}
        <br>
        Author Name: {{name}}
        <br>
        {{copyright}}
    </div>
    `
})
export class AboutChildComponent implements OnInit {
    @Input('email') email : string ;
    @Input('name') name: string;
    @Input('copyright') copyright: string;

    ngOnInit() {
    }
}
