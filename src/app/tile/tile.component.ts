import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() data
  
  beingAsked = false;

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
    e.stopPropagation();
    console.log('wrong fool!!')
    this.beingAsked = false;
    console.log('bAsked', this.beingAsked)
  }

}
