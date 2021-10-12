import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  message:String = "Hello, I'm Wyatt, and welcome to my digital portfolio."
                   + " To me, software development is not some mundane task to be carried out week to week."
                   + " Software development is an art. It is an engineering discipline. It is a skillset with which I can impact the lives of others in"
                   + " a positive way by building a product that people love. I think my greatest fulfillment in life would be knowing that I contributed to something"
                   + " that not only improved my own future, but the future of mankind. As an engineer, I have the responsbility to myself and humanity to build products"
                   + " with the utmost quality, reliability, sustainability, and maximal user enjoyment, and to continue pushing the bounds of innovation.\n\n"
                   + "I always imagined myself being in a position someday where I could have a positive impact on as many people as possible."
                   + " Being a software engineer is my gateway to that reality."
                   + " I want to contribute in any way I possibly can to innovation and advancement of the human race. I have worked on many applications, both personal and for a large"
                   + " group of users in industry. These projects include web apps, mobile apps, console applications, embedded systems, game development, machine learning models (including a written and published paper),"
                   + " database design and development, and API and microservice development."

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
