import { Component, HostListener } from '@angular/core';
import { jobModel } from './jobs/job-model';
import { JobsDataService } from './jobs/jobs-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [JobsDataService],
})
export class AppComponent {
  title = 'jobs-page';
  jobs: ReadonlyArray<jobModel> = [];
  constructor(private jobsDataService: JobsDataService) {
    this.jobsDataService.getJobs().subscribe((jobs) => (this.jobs = jobs));
  }

  resetData() {
    this.jobsDataService.resetData();
  }

  @HostListener('window:beforeunload')
  beforeUnloadHandler() {
    this.jobsDataService.storeJobsOnLocalStorage();
  }
}
