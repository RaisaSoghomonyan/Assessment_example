import {NgModule} from '@angular/core';
import {NewProjectComponent} from './new-project.component';
import {SharedModule} from '../../shared/shared.module';
import {NewProjectRoutingModule} from './new-project-routing.module';

@NgModule({
  declarations: [NewProjectComponent],
  imports: [
    SharedModule,
    NewProjectRoutingModule
  ],
  exports: [NewProjectComponent]
})
export class NewProjectModule { }
