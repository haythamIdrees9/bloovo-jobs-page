import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, filter, skip, take } from 'rxjs';
import { jobModel } from '../job-model';
import { JobsDataService } from '../jobs-data.service';

@Component({
  selector: 'app-jobs-view',
  templateUrl: './jobs-view.component.html',
  styleUrls: ['./jobs-view.component.scss'],
})
export class JobsViewComponent implements OnInit {
  jobs: ReadonlyArray<jobModel> = [];
  filteredJobs: ReadonlyArray<jobModel> = [];
  filterControl = new FormControl();
  constructor(
    private jobsDataService: JobsDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.jobsDataService
      .getJobs()
      .pipe(
        filter((jobs) => jobs?.length > 0),
        take(1)
      )
      .subscribe((jobs) => {
        this.jobs = jobs;
        this.handleUrlChange();
      });
    this.jobsDataService.getJobs().pipe(skip(1)).subscribe((jobs) => (this.jobs = jobs));
      this.handleTermChange();
  }

  private handleTermChange(){
    this.filterControl.setValue(this.route.snapshot.queryParams['term'] || '');
    this.filterControl.valueChanges
      .pipe(debounceTime(350))
      .subscribe((term) => {
        if (term) {
          this.router.navigate([''], {
            queryParams: { term },
            queryParamsHandling: 'merge',
          });
        } else {
          this.router.navigate(['']);
        }
      });
  }

  private handleUrlChange() {
    this.route.queryParams.subscribe((queryParams) => {
      this.onFilter(queryParams['term']);
    });
  }

  private onFilter(term: string) {
    if(!term?.length){
      this.filteredJobs = this.jobs;
    } else if (this.jobs) {
      this.filteredJobs = this.jobs.filter((job) => {
        if (job) {
          return (
            this.isInclude(job.title, term) ||
            this.isInclude(job.country, term) ||
            this.isInclude(job.sector, term) ||
            this.isInclude(job.city, term) ||
            this.isInclude(job.description, term)
          );
        }
        return false;
      });
    }
  }

  private isInclude(originText: string, term: string):boolean {
    return originText?.toLowerCase().includes(term?.toLowerCase());
  }
}
