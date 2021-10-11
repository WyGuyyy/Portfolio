import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  private observer:IntersectionObserver | undefined;
  element: Element | undefined;

  constructor() { }

  ngOnInit(): void {

    this.createObserver();

  }

  handleIntersect(entries:IntersectionObserverEntry[], obsever:IntersectionObserver){
    entries.forEach((entry) => {
      if(entry.intersectionRatio > 0.1){
        entry.target.classList.add("showCard");
      }
    });

    this.observer?.unobserve(this.element as Element);

  }

  createObserver(){

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4
    };

    this.element = document.getElementsByClassName("experience-content")[0] as Element;

    this.observer = new IntersectionObserver(this.handleIntersect, options);

    this.observer.observe(this.element);

  }

}
