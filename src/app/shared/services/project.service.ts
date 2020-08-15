import {Injectable} from '@angular/core';
import {Project} from '../models/project';
import {PROJECTS} from '../projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = PROJECTS;
  getProjectById(id: number | string): Project{
    return this.projects.find(proj => proj.id === +id);
  }
 get getAllProjects(): Project[] {
    return this.projects;
  }
  updateProjectName(id: number, name: string): void{
    const currentProj = this.projects.find(proj => proj.id === id);
    currentProj.name = name;
  }
  updateProjectDescription(id: number, description: string): void{
    const currentProj = this.projects.find(proj => proj.id === id);
    currentProj.description = description;
   }
   addNewProject(name: string, description: string): void{
    const NewId = Math.max.apply(Math, this.projects.map((obj) => obj.id)) + 1;
    this.projects.push({id: NewId, name, description});
   }
   deleteProject(id: number): void{
    const index = this.projects.indexOf(this.projects.find((obj) => obj.id === id));
    if (index > -1) {
       this.projects.splice(index, 1);
     }
   }

}
