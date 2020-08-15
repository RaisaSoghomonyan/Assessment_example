import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Project} from '../shared/models/project';
import {ProjectService} from '../shared/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects: Project[];
  displayedColumns: string[] = ['ID', 'Name'];
  constructor(private router: Router, private projectService: ProjectService) {
    this.projects = projectService.getAllProjects;
  }
  ngOnInit(): void {  }
  logout(): void {
    this.router.navigate(['./login']);
  }

}
