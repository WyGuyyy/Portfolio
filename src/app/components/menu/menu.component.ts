import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
//@Output() menuItemClick: EventEmitter<string> = new EventEmitter();

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {

  }

  onMenuItemClick(id:string){ //Start here next time, something not working with onMenuItemClick

    var element = document.getElementById(id);
    
    if(element){
      if(element.classList.contains("show")){
        element.classList.remove("show");
      }else{
        element.classList.add("show");
      }
    }

    this.projectService.setProject(id);
  }

}
