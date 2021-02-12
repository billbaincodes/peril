import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor() { }

  currScore = 0;

  private score = new Subject<any>();

  getScore(): Observable<any> {
    return this.score.asObservable();
  }

  updateScore(delta) {
    this.currScore += delta;
    this.score.next(this.currScore)
  }
}
