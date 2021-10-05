import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-site';

  menuItemClick(showId: string){
    var element = document.getElementById(showId);
    
    if(element){
      if(element.classList.contains("show")){
        element.classList.remove("show");
      }else{
        element.classList.add("show");
      }
    }
  }
}
