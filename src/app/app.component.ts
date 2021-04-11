import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  randomText = lorem.sentence()
  enteredText = ''
  // userText:string = ''

  onInput(value:string) {
    this.enteredText = value
    // this.userText = value
  }

  compare(randomLetter:string, enteredLetter:string) {
    if(!enteredLetter){
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect'
    }
  }

  // NOTE: My solution. Based on next steps, altering to follow video. This did work.
  // compareText() {
  //   return this.userText === this.randomText
  // }
  
