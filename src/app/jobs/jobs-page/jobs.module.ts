import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JobCardComponent } from '../job-card/job-card.component';
import { JobsDataService } from '../jobs-data.service';
import { JobsViewComponent } from '../jobs-view/jobs-view.component';
import { JobsPageComponent } from './jobs-page.component';

@NgModule({
  imports: [CommonModule,ReactiveFormsModule,RouterModule.forChild([{path:'',component:JobsPageComponent}])],
  declarations: [JobsViewComponent, JobCardComponent, JobsPageComponent],
  exports: [JobsViewComponent, JobCardComponent],
  providers:[JobsDataService]
})
export class JobsModule {}
