import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  randomText = lorem.sentence()
  userText:string = ''

  onInput(value:string) {
    this.userText = value
  }
  
}
