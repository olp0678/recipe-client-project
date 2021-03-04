import {Component, OnInit} from '@angular/core';
import {About} from '../../components/interfaces/About';
import constants from '../app.constants';

@Component({
  selector: 'about',
  template: require('./about.html'),
  styles: [require('./about.scss')],
})
export class AboutComponent implements OnInit {
  about : About;
  static parameters = [];
  constructor() {
      this.about = constants.about;
  }




  ngOnInit() {
  }
}
