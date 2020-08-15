import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {Project} from '../../shared/models/project';
import {ProjectService} from '../../shared/services/project.service';
import {MyValidators} from '../../shared/validators/validator';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  projects: Project[];
  projectForm: FormGroup;
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(private projectService: ProjectService, private fb: FormBuilder) {
    this.projects = projectService.getAllProjects;
  }

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      projectName: ['', [Validators.required, MyValidators.uniqueProjectName(this.projects) ]],
      projectDescription: ['']
    });
  }
  get projectName(): FormControl{
    return this.projectForm.get('projectName') as FormControl;
  }

  get projectDescription(): FormControl{
    return this.projectForm.get('projectDescription') as FormControl;
  }


  isErrorState(control: FormControl): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched ));
  }
  addProject(): void{
    this.projectService.addNewProject(this.projectName.value, this.projectDescription.value);
    this.projectForm.reset();
    this.formGroupDirective.resetForm();
  }

}

