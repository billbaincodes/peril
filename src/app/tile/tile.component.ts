import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ScoreService } from '../score.service';

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

  constructor(
    private scoreService: ScoreService
  ) { }

  ngOnInit() {
  }

  ask(e){
    this.beingAsked = true;
  }

  guess(e){
    e.stopPropagation(); // stop ask from firing
    let regex = new RegExp(this.data.regex, 'mi');
    console.log(regex, this.conjecture)
    console.log(regex.test(this.conjecture));
    if (regex.test(this.conjecture)){
      this.correct = true;
      this.scoreService.updateScore(this.data.value)
    } else {
      console.log('oh god no')
      this.correct = false;
      this.scoreService.updateScore(-this.data.value)
    }
    this.answer = true;
  }

  close(e) {
    e.stopPropagation();
    this.data.active = false;
    this.beingAsked = false;
  }
}
