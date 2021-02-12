import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/dummy.json';

@Component({
  selector: 'Board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor() { }

  set:any = (data as any).default;

  ngOnInit() {
  }

}
