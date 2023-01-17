import { Project } from "./Project";

export const PROJECTS: Project[] = [
    {
        id: "menu-Fit4Life",
        title: "Fit4Life",
        description: `Fit4Life is an webapp I developed for a high school PE program to help students
                      and teachers track fitness goals, workouts, metrics, grades, and more The frontend is written
                      in ReactJS and uses a Java SpringBoot API to make requests to a backend MySQL server.
                      This is a fullstack application with a complete account/login system for security 
                      (Click on the image for a video Demo).` ,
        tall_image: "Fit4Life_Tall.PNG",
        wide_image: "Fit4Life_Wide.PNG",
        link: "https://youtu.be/Y3tnPkKfVkg"
    },
    {
        id: "menu-MidMichiganSeconds",
        title: "Mid-Michigan Seconds",
        description: `Mid-Michigan Seconds is a webapp I developed with a friend. My friend
                      came up with the idea to sell \"virtual real estate\" by allowing companies,
                      artists, photographers, freelancers, etc. to buy seconds of the day with which they 
                      could display something like a company logo or image to advertise that would appear
                      on a carousel slideshow on the site. The frontend is written in ReactJS and uses
                      some third party libaries like PayPals billing and payment APIs to handle transactions
                      when customers purchase seconds of the day. The app uses a Java Spring API to send requests
                      to a backend MySQL server. This is a fullstack application (Click on the image for a video Demo).` ,
        tall_image: "MidMichiganSeconds_Tall.PNG",
        wide_image: "MidMichiganSeconds_Wide.PNG",
        link: "https://youtu.be/j94QXj6LU9E"
    },
    {
        id: "menu-PortfolioSite",
        title: "Portfolio Site",
        description: `The portfolio site you are currently viewing is a single page AngularJS web app. For cost reasons, the application does not
                     make any calls to an API or backend datastore, but instead uses a mock service on the frontend to load data for the project
                     descriptions and images stored as JSON and internal assets.` ,
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
                      control of the whole thing - every part of the system down to authentication. So
                      I did just that and wrote an entire API service with over 13 different contollers interacting with
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
                      The Room Database Architecture simplifies this by acting as a layer on top of the SQLite.` ,
        tall_image: "Ahem_Tall.PNG",
        wide_image: "Ahem_Wide.PNG",
        link: ""
    },
    {
        id: "menu-CppTutorials",
        title: "C++ Tutorials",
        description: `I started a C++ tutorial series on YouTube that I was doing to both help others and teach myself C++.
                      I had to postpone videos due to getting busy with other projects, but it is something I hope to continue producing soon.
                      My end goal behind learning C++ was to jump into game development with Unreal Engine.
                      (Click the image for current playlist.)` ,
        tall_image: "CPP_Tall.PNG",
        wide_image: "CPP_Wide.PNG",
        link: "https://www.youtube.com/watch?v=iO_bKJ4MvHY&list=PLC-Mtri4YuFDQlae_DvGtYkNN3tCSv3rO"
    },
    {
        id: "menu-Fit4Life-Fullstack",
        title: "Fit4Life (Fullstack Architecture)",
        description: `Fit4Life is a fullstack application, hosted in AWS (I host the DNS server through NameCheap). The frontend React project is stored in an AWS S3 bucket that is served up via AWS CloudFront CDN. This front end 
                      application makes requests to a Java Springboot API running on an EC2 server. As I have multiple apps running on the same server, 
                      incoming requests are actually picked up and forwarded to the intended application via an NGINX reverse proxy
                      virtual web server. The API then makes requests to a MySQL server.` ,
        tall_image: "Fit4Life_Tall.PNG",
        wide_image: "Fit4Life_Wide.PNG",
        link: ""
    },
    {
        id: "menu-MidMichiganSeconds-Fullstack",
        title: "Mid-Michigan Seconds (Fullstack Architecture)",
        description: `Mid-Michigan Seconds is a fullstack application, hosted in AWS (I host the DNS server through NameCheap). The frontend React project is stored in an AWS S3 bucket that is served up via AWS CloudFront CDN. This front end 
                      application makes requests to a Java Springboot API running on an EC2 server. As I have multiple apps running on the same server,
                      incoming requests are actually picked up and forwarded to the intended application via an NGINX reverse proxy
                      virtual web server. The API then makes requests to a MySQL server.` ,
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
        description: `In this position, I had the opportunity to work in several very cool spaces. The bulk of my work involved building desktop
                      applications for Chemical Engineers to help reduce the time of data transfer, processing and entry from lab machines
                      into on premise datastores. Via our desktop solutions, we were able to reduce the time Engineers spent on these items
                      by over 60%. Other responsibilities include managing teams network and lab computers and deploying Acronis backup software
                      to across our network to guarantee 100% data retention and restore on all lab computers.
                      ` ,
        tall_image: "Dow_Tall.PNG",
        wide_image: "Dow_Wide.PNG",
        link: ""
    },
    {
        id: "menu-DowSoftwareDeveloper",
        title: "Dow (Software Developer)",
        description: `After 2 1/2 years as a Coop at Dow, I started as a fulltime software developer. 
                      In this position, I had the opportuntiy to work with a wide variety of technologies. The bulk of my work here was
                      building web apps for various businesses across the company to enable paperless solutions for increased
                      productivity. In some cases, productivity increased by as much as 50% by building HTTP communication pipelines
                      between our webapps and on premise master data to automatically sync data between both systems. I also decommissioned
                      and replaced old Java brokers, saving the company thousands of dollars in technical debt.` ,
        tall_image: "Dow_Tall.PNG",
        wide_image: "Dow_Wide.PNG",
        link: ""
    },
    {
        id: "menu-DowSoftwareDeveloper2",
        title: "Dow (Software Developer II)",
        description: `After 18 months in my first full time position, I rotated to a new team.
                      I worked on a variety features for a large event driven progressive web app that replaced a legacy system saving the company
                      thousands of dollars in technical debt. To name a few: I optimized our Azure Durable Functions and Service Bus Queues resulting in a 90% speedup of our
                      asynchronous job processing for batch data. I also built out a failure attachment interface for our email notification system giving users and
                      the development team much better visibility into our asynchrnous jobs with failure reports attached to emails sent from the application.`,
        tall_image: "Dow_Tall.PNG",
        wide_image: "Dow_Wide.PNG",
        link: ""
    },
    {
        id: "menu-CooksPaintingCo",
        title: "Cooks Painting Co",
        description: `This project was a website I created for a local entrepreneur. The site includes information about the company and its services,
                      a testimonial carousel, a rotating gallery, and a form to send requests for a projects via email. The email is routed through EmailJS
                      to a business email. This site is also integrated with google analytics so that the owners can track traffic on the site.` ,
        tall_image: "Cooks_Tall.PNG",
        wide_image: "Cooks_Wide.PNG",
        link: "https://cookspaintingco.com/home"
    }
];