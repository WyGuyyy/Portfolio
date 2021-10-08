import { Component, OnInit } from '@angular/core';
import { animate, state, transition, trigger, style, query } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selected:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickHamburger(){
    this.transformHamburger();
    
    if(this.selected){
      this.showMenu();
    }else{
      this.hideMenu();
    } 

  }

  transformHamburger(){
    const bar1 = document.getElementsByClassName("header-hamburger-line1")[0] as HTMLElement;
    const bar2 = document.getElementsByClassName("header-hamburger-line2")[0] as HTMLElement;
    const bar3 = document.getElementsByClassName("header-hamburger-line3")[0] as HTMLElement;

    if(bar1 && bar2 && bar3){
      
      if(this.selected){

          this.selected = false;

          bar1.style.transform = "rotate(0deg)";
          bar2.style.opacity = "1";
          bar3.style.transform = "rotate(0deg)";

      }else{

        this.selected = true;

          bar1.style.transform = "rotate(-45deg) translateY(20px)";
          bar2.style.opacity = "0";
          bar3.style.transform = "rotate(45deg) translateY(-22px)";

      }

  }

}

showMenu(){
  const menu = document.getElementsByClassName("menu-container")[0] as HTMLElement;

  menu.style.right = "0px";
}

hideMenu(){
  const menu = document.getElementsByClassName("menu-container")[0] as HTMLElement;

  menu.style.right = "-300px";
}

}
