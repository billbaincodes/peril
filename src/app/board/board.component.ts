import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor() { }

  set = [
    { name: 'category 1',
      questions: [
        { query: 'are you cool', answer: 'yes', value: 200, active: true },
        { query: 'are you not', value: 400, active: true },
        { query: 'q3', value: 600, active: true },
        { query: 'q4', value: 800, active: true },
        { query: 'q5', value: 1000, active: true },
      ],
    },
    { name: 'category 2', questions: [
      { query: 'are you cool', value: 200, active: true },
      { query: 'are you not', value: 400, active: true },
      { query: 'q3', value: 600, active: true },
      { query: 'q4', value: 800, active: true },
      { query: 'q5', value: 1000, active: true },
    ] },
    { name: 'category 3', questions: [
      { query: 'are you cool', value: 200, active: true },
      { query: 'are you not', value: 400, active: true },
      { query: 'q3', value: 600, active: true },
      { query: 'q4', value: 800, active: true },
      { query: 'q5', value: 1000, active: true },
    ] },
    { name: 'category 4', questions: [
      { query: 'are you cool', value: 200, active: true },
      { query: 'are you not', value: 400, active: true },
      { query: 'q3', value: 600, active: true },
      { query: 'q4', value: 800, active: true },
      { query: 'q5', value: 1000, active: true },
    ] },
    { name: 'category 5', questions: [
      { query: 'are you cool', value: 200, active: true },
      { query: 'are you not', value: 400, active: true },
      { query: 'q3', value: 600, active: true },
      { query: 'q4', value: 800, active: true },
      { query: 'q5', value: 1000, active: true },
    ] },
  ]

  ngOnInit() {
  }

}
