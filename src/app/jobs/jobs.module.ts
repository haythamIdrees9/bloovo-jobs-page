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

@NgModule({
  imports: [CommonModule,FormsModule, ReactiveFormsModule,CustomModule,RouterModule.forChild([{path:'',component:JobsPageComponent}])],
  declarations: [JobsViewComponent, JobCardComponent, JobsPageComponent,JobsFilterComponent, AddJobModalComponent],
  exports: [JobsViewComponent, JobCardComponent],
  providers:[JobsDataService]
})
export class JobsModule {}
