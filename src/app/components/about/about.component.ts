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
                   + " group of users in industry. These project include web apps, mobile apps, console applications, embedded systems, game development, machine learning models (including a written and published paper),"
                   + " database design and development, API and microservice development, and the list goes on.\n\nOne of my other passions aside from software development is traveling."
                   + " I believe it is something that helps feed my creativity, by experiencing different cultures, meeting new people, and exploring the many sights our beautiful world has to offer."

  constructor() { }

  ngOnInit(): void {
  }

}