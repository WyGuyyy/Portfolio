import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { animate, state, transition, trigger, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
    trigger('hideProject', [
      state('refresh', style({opacity: '0'})),
      transition('* => refresh', [
        animate('1s', keyframes([
          style({opacity: '1'}),
          style({opacity: '0'})
        ]))
      ])
    ]),
    trigger('showProject', [
      state('refresh2', style({opacity: '1'})),
      transition('* => refresh2', [
        animate('1s', keyframes([
          style({opacity: '0'}),
          style({opacity: '1'})
        ]))
      ])
    ])
  ]
})
export class ProjectComponent implements OnInit {

  state:string = "";

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.state = "refresh";
    this.cdr.detectChanges();
  }

  hideProject(){

    var element = document.getElementById("test");

    if(element){
    element.textContent = "this is new";
    }

    this.state = "refresh2";

  }

}
