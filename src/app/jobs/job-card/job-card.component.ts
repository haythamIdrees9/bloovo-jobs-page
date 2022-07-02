import { Component, Input, OnInit } from '@angular/core';
import { jobModel } from '../job-model';
import { JobsDataService } from '../jobs-data.service';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {
 
  @Input('job') job:jobModel | undefined;
  isJobDeleteClicked:boolean = false;
  isJobViewWClicked:boolean = false;
  constructor(private jobsDataService:JobsDataService) { }

  deleteJob() {
    if(this.job && !!window){
      const jobId = this.job.id;
      setTimeout(()=>{
        this.jobsDataService.deleteJob(jobId)
      },400)
    }
  }

}
