import { Component, OnInit } from '@angular/core';
import { nextContext } from '@angular/core/src/render3';
import { Observable, of, Subscription } from 'rxjs';
import { ScoreService } from '../score.service';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // score = new Observable();
  score: number = 0;

  subscription: Subscription;

  constructor(
    private scoreService: ScoreService
  ) { }
  

  ngOnInit() {
    this.subscription = this.scoreService.getScore().subscribe(score => {
      if (score) {
        console.log({ score });
        this.score = score
      }
    });
  }

  getScore(){
    console.log('this.score', this.score);
  }
}
