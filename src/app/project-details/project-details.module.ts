import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ProjectDetailsComponent} from './project-details.component';
import {ProjectDetailsRoutingModule} from './project-details-routing.module';


@NgModule({
  declarations: [ProjectDetailsComponent],
  imports: [
    SharedModule,
    ProjectDetailsRoutingModule
  ],
  exports: [ProjectDetailsComponent]
})
export class ProjectDetailsModule { }
