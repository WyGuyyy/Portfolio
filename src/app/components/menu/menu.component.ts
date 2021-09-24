import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
@Output() menuItemClick: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onMenuItemClick(showId:string){ //Start here next time, something not working with onMenuItemClick
    this.menuItemClick.emit(showId);
  }

}
