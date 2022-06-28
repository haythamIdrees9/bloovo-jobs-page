import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { initialJobsList } from './initial-jobs';
import { job } from './job-model';

@Injectable()
export class JobsDataService {
  private static readonly JOBS_STORAGE_KEY = 'JOBS_STORAGE_KEY';
  private jobsList: Array<job> = [];
  private readonly jobsListBehaviorSubject = new BehaviorSubject<ReadonlyArray<job>>([]);
  constructor() {
    this.loadData();
  }


  private loadData(){
    if(!localStorage){
      return;
    }

    if (localStorage.getItem(JobsDataService.JOBS_STORAGE_KEY)) {
      this.jobsList = JSON.parse(localStorage.getItem(JobsDataService.JOBS_STORAGE_KEY) as string);
    } else {
      localStorage.setItem(JobsDataService.JOBS_STORAGE_KEY,JSON.stringify(initialJobsList));
      this.jobsList = [...initialJobsList];
    }

    this.jobsListBehaviorSubject.next(this.jobsList);
  }

  deleteJob(jobId:number){
    this.jobsList = this.jobsList.filter(job => job.id !== jobId);
    this.jobsListBehaviorSubject.next(this.jobsList);
  }

  getJobs(): Observable<readonly job[]>{
    return  this.jobsListBehaviorSubject.asObservable();
  }
}
