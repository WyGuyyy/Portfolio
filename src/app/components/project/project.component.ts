import { Component, OnInit, ChangeDetectorRef, Input, OnDestroy } from '@angular/core';
import { animate, state, transition, trigger, style, keyframes } from '@angular/animations';
import {Project} from '../../Project';
import {PROJECTS} from '../../project-data';
import { ProjectService } from 'src/app/services/project.service';
import { Subscription } from 'rxjs';

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
export class ProjectComponent implements OnInit, OnDestroy {

  subscriptions = new Subscription();

  state:string = "";

  title:string = "Select a Project";
  description:string = "Click on a project from the hamburger menu to be displayed!";
  imagePath:string = "url(../../assets/img/" + (window.innerWidth <= 800 ? "Default_Wide,jpg" : "Default_Tall.jpg") + ")";
  link:string = "";

  project:Project = {
    id: "",
    title: "",
    description: "",
    tall_image: "",
    wide_image: "",
    link: ""
  };

  private observer:IntersectionObserver | undefined;
  aboutElement: Element | undefined;

  constructor(private cdr: ChangeDetectorRef, private projectService: ProjectService) { }

  ngOnInit(): void {

    this.subscriptions.add(this.projectService.projectChanged$
      .subscribe(project => {

        if(!(project.id === this.project.id) || this.project.id === ""){
          this.project = project;
          
          if(this.project.id !== ""){
            this.state = "refresh";
          }

        }
      }));

      this.createObserver();
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

  handleIntersect(entries:IntersectionObserverEntry[], obsever:IntersectionObserver){
    entries.forEach((entry) => {
      if(entry.intersectionRatio > 0.1){
        entry.target.classList.add("showProject");
      }
    });

    this.observer?.unobserve(this.aboutElement as Element);
  }

  createObserver(){

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    this.aboutElement = document.getElementsByClassName("project-content")[0] as Element;

    this.observer = new IntersectionObserver(this.handleIntersect, options);
    this.observer.observe(this.aboutElement);
  }


  showProject(){
    
    if(this.state === ""){
      return;
    }

    /*var description = document.getElementById("project-display-description");
    var image = document.getElementById("project-display-image");*/

    var imageName = (window.innerWidth <= 800 && window.innerWidth >= 425 ? this.project.wide_image : this.project.tall_image);

    this.title = this.project.title;
    this.description = this.project.description;
    this.imagePath = "url(../../assets/img/" + imageName + ")";
    this.link = this.project.link;

    this.state = "refresh2";

  }

  onImageClick(){

      if(this.link !== ""){
         window.open(this.link);
      }

  }

}
