import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {Project} from '../Project';
import {PROJECTS} from '../project-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  project:Project = {
    id: "",
    title: "",
    description: "",
    tall_image: "",
    wide_image: "",
    link: ""
  };

  allProjects: Project[] = PROJECTS;

  private projectSubject$ = new BehaviorSubject<Project>(this.project);

  projectChanged$ = this.projectSubject$.asObservable();

  constructor() { }

  setProject(projectId:string){
    
    for(var count = 0; count < this.allProjects.length; count++){
      var aProject = this.allProjects[count];
      if(aProject.id === projectId){
        this.project = aProject;
        this.projectSubject$.next(aProject);
        break;
      }
    }

  }

  /*getProject(): Observable<Project>{
    const project = of(this.project);
    return project;
  }*/
}
