import { Component, OnInit } from '@angular/core';
import {Project} from '../shared/models/project';
import {ProjectService} from '../shared/services/project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from '../shared/validators/validator';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project;
  projects: Project[];
  projectForm: FormGroup;
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
     ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.project = this.projectService.getProjectById(params.get('id'));
    });
    this.projects = this.projectService.getAllProjects;
    this.projectForm = this.fb.group({
      projectName: [this.project.name, [Validators.required, MyValidators.uniqueProjectName(this.projects, this.project.name)]],
      projectDescription: [this.project.description]
    });
   }
  isErrorState(control: FormControl): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched ));
  }
  get projectName(): FormControl{
    return this.projectForm.get('projectName') as FormControl;
  }

  get projectDescription(): FormControl{
    return this.projectForm.get('projectDescription') as FormControl;
  }

  updateProject(): void{
    this.projectService.updateProjectName(this.project.id, this.projectName.value);
    this.projectService.updateProjectDescription(this.project.id, this.projectDescription.value);
  }

  deleteProject(): void {
    this.projectService.deleteProject(this.project.id);
  }
}
