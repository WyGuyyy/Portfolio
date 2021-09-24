import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { animate, state, transition, trigger, style } from '@angular/animations';
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
export class HomeComponent implements OnInit {
  message:String = "Hello, I'm Wyatt, and welcome to my digital portfolio."
                    + " To me, software development is not some mundane task to be carried out week to week so that I can cash in a pretty paycheck."
                    + " Software development is an art. It is an engineering discipline. It is a skillset with which I can impact the lives of others in"
                    + " a positive way by building a product that people love. I think my greatest fulfillment in life would be knowing that I contributed to something"
                    + " that not only improved my own future, but the future of mankind. As an engineer, I have the responsbility to myself and humanity to build products"
                    + " with the utmost quality, reliability, sustainability, and maximal user enjoyment, and to continue pushing the bounds of innovation."
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
