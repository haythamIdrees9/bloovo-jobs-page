import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JobCardComponent } from './job-card/job-card.component';
import { JobsDataService } from './jobs-data.service';
import { JobsFilterComponent } from './jobs-filter/jobs-filter.component';
import { JobsViewComponent } from './jobs-view/jobs-view.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { AddJobModalComponent } from './add-job-modal/add-job-modal.component';
import { CustomModule } from '../custom/custom.module';
import { ViewJobComponent } from './view-job/view-job.component';

@NgModule({
  imports: [CommonModule,FormsModule, ReactiveFormsModule,CustomModule,RouterModule.forChild([{path:'',component:JobsPageComponent}])],
  declarations: [JobsViewComponent, JobCardComponent, JobsPageComponent,JobsFilterComponent, AddJobModalComponent,ViewJobComponent],
  exports: [JobsViewComponent, JobCardComponent,ViewJobComponent],
  providers:[JobsDataService]
})
export class JobsModule {}
