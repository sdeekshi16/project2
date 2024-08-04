import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  backgroundColor = 'lightblue';
  changeBackgroundColor() {
    this.backgroundColor = this.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
  }
  
}
