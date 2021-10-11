import { Project } from "./Project";

export const PROJECTS: Project[] = [
    {
        id: "menu-Fit4Life",
        title: "Fit4Life",
        description: `Fit4Life is an webapp I developed for my sister-in-law's high school. It is a 
                      fitness app used by the PE program to help students and teachers track fitenss
                      goals, workouts, metrics, grades, and more. The app is written in React with 
                      Node.js. It uses a Java SpringBoot API to make requests to a backend MySQL server.
                      This is a fullstack application with a complete account/login system for security 
                      (more on the architecture under FullStack section in the menu).` ,
        tall_image: "Fit4Life_Tall.PNG",
        wide_image: "Fit4Life_Wide.PNG",
        link: ""
    },
    {
        id: "menu-MidMichiganSeconds",
        title: "Mid-Michigan Seconds",
        description: `Mid-Michigan Seconds is a webapp I developed with a friend. My friend
                      came up with the idea to sell \"virtual real estate\" by allowing companies,
                      artists, photographers, freelancers, etc. to buy seconds of the day with which they 
                      could display something like a company logo or image to advertise that would appear
                      on a carousel slideshow on the site. The app is written in React with Node.js and uses
                      some third party libaries like PayPals billing and payment APIs to handle transactions
                      when customers purchase seconds of the day. The app uses a Java Spring API to send requests
                      to a backend MySQL server. This is a fullstack application (more on the architecture under FullStack section in the menu).` ,
        tall_image: "MidMichiganSeconds_Tall.PNG",
        wide_image: "MidMichiganSeconds_Wide.PNG",
        link: "https://youtu.be/j94QXj6LU9E"
    },
    {
        id: "menu-PortfolioSite",
        title: "Portfolio Site",
        description: `After gaining some experience with React, I wanted to jump in and try Vue and Angular.
                      I had been wanting to build a portfolio site for quite some time, and thought what better way
                      to get experience with a new framework then to build a simple single page webapp for my portfolio.
                      I took a crash course in both Vue and Angular, and ultimately decided to build it with Angular. The learning curve
                      probably would have been alot less steep with Vue, but Angular seemed like such a complete Framework with so many
                      libraries to explore, so I decided to dive into Angular. This site does not connect to a backend, but connects to a mock
                      observable service that stores all of my project data.` ,
        tall_image: "Portfolio_Tall.PNG",
        wide_image: "Portfolio_Wide.PNG",
        link: ""
    },
    {
        id: "menu-Fit4LifeAPI",
        title: "Fit4Life API",
        description: `Fit4Life API is just the service sitting between my React Fit4Life application
                      and the backend MySQL server. In my college capstone course, we used
                      Java Springboot for the service layer of our project. During that project, I was assigned
                      to specific facets of the system, but I wanted to take that a step further and be in total
                      control of the whole thing - every part of the system down to the authentication package. So
                      I did just that and wrote an entire API service with over 13 different interfaces interacting with
                      a MySQL database, and wrote a basic autentication system using the Spring framework.` ,
        tall_image: "Default_Tall.jpg",
        wide_image: "Default_Wide.jpg",
        link: ""
    },
    {
        id: "menu-MidMichiganSecondsAPI",
        title: "Mid-Michigan Seconds API",
        description: `MidMichiganSeconds API is just the service sitting between my React Mid-Michigan Seconds application
                      and the backend MySQL server. This service handles everything from tracking customer images aligned
                      to certain seconds of the day for the carousel slideshow, to managing payments and transactions made by customers.
                      The services' transaction module connects to the PayPal Billing and Payment API so that secure and accurate payments can be ensured
                      by a trusted and well known third party.` ,
        tall_image: "Default_Tall.jpg",
        wide_image: "Default_Wide.jpg",
        link: ""
    },
    {
        id: "menu-FreezeTrack",
        title: "FreezeTrack",
        description: `FreezeTrack was a little side project I wrote for Android in Java/xml so I could get some native mobile
                      development under my belt. The app enables users to keep track of the dates in which
                      they bought and stored food, and the expiration date of those foods so that consumption can be
                      planned accordingly. My favorite part about this project is that I was able to play around
                      with the camera API of the device, setting up a Camera Capture Session and manually supplying the session with a surface texture
                      and capture settings (although I ultimately just used Android's baked in ACTION_IMAGE_CAPTURE Intent Action as it offered more features
                      than my custom capture session). This app sits on top of a SQLite database for data persistence.` ,
        tall_image: "FreezeTrack_Tall.PNG",
        wide_image: "FreezeTrack_Wide.PNG",
        link: ""
    },
    {
        id: "menu-Ahem",
        title: "Ahem",
        description: `Ahem is a native Android application that I developed to get some experience with the Google Maps API and Android's more recent Room Database
                      Architecture for data flow between the database, the controller, and the view of the application. Anyone that worked with data persistence on Android
                      from the the middle of the 20-teen years knows that data persistence with SQLite used to have to be handled by interacting directly with the SQLite database via SQLiteOpenHelper.
                      The Room Database Architecture simplifies this by acting as a layer on top of the SQLite. The entirety of this architecture is a little too much to discuss here.` ,
        tall_image: "Ahem_Tall.PNG",
        wide_image: "Ahem_Wide.PNG",
        link: ""
    },
    {
        id: "menu-CppTutorials",
        title: "C++ Tutorials",
        description: `I started a C++ tutorial series on YouTube that I was doing to both help others and teach myself C++.
                      I had to postpone videos due to getting busy with other projects, but it is something I hope to continue producing soon.
                      C++, and its close equivalency Rust, are two of the primary languages I want to learn in the near future so that I can try my
                      hand in game development.
                      (Click the image for current playlist.)` ,
        tall_image: "CPP_Tall.PNG",
        wide_image: "CPP_Wide.PNG",
        link: "https://www.youtube.com/watch?v=iO_bKJ4MvHY&list=PLC-Mtri4YuFDQlae_DvGtYkNN3tCSv3rO"
    },
    {
        id: "menu-Fit4Life-Fullstack",
        title: "Fit4Life (Fullstack Architecture)",
        description: `Fit4Life is a fullstack application, hosted in AWS (I host the DNS server through NameCheap). The frontend React project is stored in an AWS S3 bucket that is served up via AWS CloudFront CDN. This front end 
                      application makes requests to a Java Springboot API running on an EC2 server. As I have multiple apps running on the same server
                      (due to my inadvertent frugality), incoming requests are actually picked up and forwarded to the intended application via an NGINX reverse proxy
                      virtual web server. The API then makes CRUD requests to a MySQL server.` ,
        tall_image: "Fit4Life_Tall.PNG",
        wide_image: "Fit4Life_Wide.PNG",
        link: ""
    },
    {
        id: "menu-MidMichiganSeconds-Fullstack",
        title: "MidMichiganSeconds (Fullstack Architecture)",
        description: `Mid-Michigan Seconds is a fullstack application, hosted in AWS (I host the DNS server through NameCheap). The frontend React project is stored in an AWS S3 bucket that is served up via AWS CloudFront CDN. This front end 
                      application makes requests to a Java Springboot API running on an EC2 server. As I have multiple apps running on the same server
                      (due to my inadvertent frugality), incoming requests are actually picked up and forwarded to the intended application via an NGINX reverse proxy
                      virtual web server. The API then makes CRUD requests to a MySQL server.` ,
        tall_image: "MidMichiganSeconds_Tall.PNG",
        wide_image: "MidMichiganSeconds_Wide.PNG",
        link: ""
    },
    {
        id: "menu-MachineLearning",
        title: "CSCI 2020 Paper/Presentation",
        description: `In the Summer of 2020, just after my capstone course and graduation, I was blessed with the opportunity to publish a paper which was accepted to present at 
                      the 2020 Computational Science and Computational Intelligence (CSCI) Conference. Originally intending to attend the conference in Las Vegas in person, the 
                      Covid-19 pandemic changed our plans and we moved to an online format. The research was on comparing a Decision Tree Model up against a Recurrent Long Short-Term Memory Neural Net
                      in the problem space of trying to compute the localization/location of a users device indoors. (Click the image to view the presentation.)` ,
        tall_image: "MachineLearning_Tall.PNG",
        wide_image: "MachineLearning_Wide.PNG",
        link: "https://youtu.be/Stnv9jgYx30"
    },
    {
        id: "menu-DowCoop",
        title: "Dow (Coop)",
        description: `Although I cannot talk specifics about projects I worked on during my Coop due to confidentiality reasons,
                      I did get an opportunity to work in several very cool spaces. We primarily worked in Visual Studio developing
                      VB.net applications for our immediate team. This was also my first exposure to Azure, which we used as our primary
                      code repository when working on projects. I also worked on several productivity scripts using VBScript, as well as a brief 
                      project working with Augmented Reality in the Unity Game Engine. Aside from coding, my Coop also gave me experience managing
                      local networks and configuring redundant backup systems for our computers.
                      ` ,
        tall_image: "Dow_Tall.PNG",
        wide_image: "Dow_Wide.PNG",
        link: ""
    },
    {
        id: "menu-DowSoftwareDeveloper",
        title: "Dow (Software Developer)",
        description: `After 2 1/2 years as a Coop at Dow, I started as a fulltime software developer. 
                      Although I cannot talk specifics about projects I worked on due to confidentiality reasons,
                      I have had the opportuntiy to work with a wide variety of technologies. I have worked in both SAP Cloud Platform
                      and Azure, and have worked on multiple webapps in the SAPUI5 framework. I have had experience taking a project from 
                      the requirements and design phase, all the way to development, testing, and production using Agile methodologies. I also gained experience building, signing and managing
                      mobile applications for both Apple and Android Platforms (Apple Developer and Google Play consoles). I have also developed in PowerApps, PowerAutomate, and
                      SharePoint.` ,
        tall_image: "Dow_Tall.PNG",
        wide_image: "Dow_Wide.PNG",
        link: ""
    },
];