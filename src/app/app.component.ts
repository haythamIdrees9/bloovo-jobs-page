import { Component } from '@angular/core';
import { job } from './jobs/job-model';
import { JobsDataService } from './jobs/jobs-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[JobsDataService]
})
export class AppComponent {
  title = 'jobs-page';
  jobs:ReadonlyArray<job> =  [];
  constructor(private jobsDataService:JobsDataService){
    this.jobsDataService.getJobs().subscribe(jobs => this.jobs = jobs)
  }
  deleteFirstJob(){
    if(this.jobs.length > 0){
      this.jobsDataService.deleteJob(this.jobs[0].id);
    } 
  }
}
