import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'main',
    template: require('./main.html'),
    styles: [require('./main.scss')],
})
export class MainComponent implements OnInit {
    private values: string[];
    static parameters = [HttpClient];
    constructor(private http: HttpClient) {
        this.http = http;
        this.values = ['first', 'second', 'third', 'fourth'];
    }

    ngOnInit() {
    }

}
