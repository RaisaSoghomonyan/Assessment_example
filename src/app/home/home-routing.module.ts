import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'newProject', loadChildren: () => import('./new-project/new-project.module').then((m) => m.NewProjectModule)}
    ]
  },
  {path: 'project/:id', loadChildren: () => import('../project-details/project-details.module').then((m) => m.ProjectDetailsModule)}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
