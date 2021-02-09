import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() data
  
  beingAsked = false;

  answer = false;

  correct = false;

  conjecture = ''

  constructor() { }

  ngOnInit() {
    console.log('data', this.data)
  }

  ask(e){
    console.log(this.data.query)
    this.beingAsked = true;
    console.log(this.data)
    console.log(this.beingAsked)
  }

  guess(e){
    e.stopPropagation(); // stop ask from firing
    console.log(this.conjecture, this.data.answer);
    if (this.conjecture == this.data.answer){
      this.correct = true;
    }
    this.answer = true;
  }

  close(e) {
    e.stopPropagation();
    this.data.active = false;
    this.beingAsked = false;
  }
}
