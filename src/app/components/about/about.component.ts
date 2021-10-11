import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  message:String = "I always imagined myself being in a position someday where I could have a positive impact on as many people as possible."
                   + " Being a software engineer is my gateway to that reality."
                   + " I want to contribute in any way I possibly can to innovation and advancement of the human race. I have worked on many applications, both personal and for a large"
                   + " group of users in industry. These projects include web apps, mobile apps, console applications, embedded systems, game development, machine learning models (including a written and published paper),"
                   + " database design and development, API and microservice development, and the list goes on.\n\nOne of my other passions aside from software development is traveling."
                   + " I believe it is something that helps feed my creativity, by experiencing different cultures, meeting new people, and exploring the many sights our beautiful world has to offer."

  private observer:IntersectionObserver | undefined;
  aboutElement: Element | undefined;

  constructor() { }

  ngOnInit(): void {

    this.createObserver();

  }

  handleIntersect(entries:IntersectionObserverEntry[], obsever:IntersectionObserver){
    entries.forEach((entry) => {
      if(entry.intersectionRatio > 0.1){
        entry.target.classList.add("showAbout");
      }
    });

    this.observer?.unobserve(this.aboutElement as Element);
  }

  createObserver(){

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4
    };

    this.aboutElement = document.getElementsByClassName("about-content-wrapper")[0] as Element;

    this.observer = new IntersectionObserver(this.handleIntersect, options);
    this.observer.observe(this.aboutElement);
  }

}
