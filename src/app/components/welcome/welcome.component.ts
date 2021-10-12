import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { animate, state, transition, trigger, style } from '@angular/animations';
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    trigger('containerFadeIn', [
      state('appoff', style({
        opacity: 0
      })),
      state('appon', style({
        opacity: 1
      })),
      transition('appoff => appon', [
        animate('1.5s')
      ])
    ]),
    trigger('contentFadeIn', [
      state('appoff', style({
        opacity: 0
      })),
      state('appon', style({
        opacity: 1
      })),
      transition('appoff => appon', [
        animate('0.5s 100ms ease-in')
      ], {delay: "1.5s"})
    ])
  ]
})
export class WelcomeComponent implements OnInit {
 
state:string = "appoff";

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.state = "appon";
    this.cdr.detectChanges();
  }

  menuItemClick(showId:string){
    var listToShow = document.getElementsByClassName(showId)[0];
    listToShow?.classList.toggle(showId);
  }

}
