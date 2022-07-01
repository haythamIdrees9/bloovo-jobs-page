import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, filter, skip, take } from 'rxjs';
import { CountryEnum, jobModel, SectorEnum, wholeCitiesList } from '../job-model';
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
  
  sectors:any = Object.keys(SectorEnum);
  countries:any = Object.keys(CountryEnum);
  citiesList:any = wholeCitiesList;
  @Output('toggleFilter') toggleFilterEmitter = new EventEmitter<void>()
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
    this.jobsDataService
      .getJobs()
      .pipe(skip(1))
      .subscribe((jobs) => (this.jobs = jobs));
    this.handleTermChange();
  }

  toggleFilter(event:Event){
    event.stopPropagation();
    this.toggleFilterEmitter.emit();
  }

  private handleTermChange() {
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
          const queryParams:any = {...this.route.snapshot.queryParams};
          delete queryParams.term;
          this.router.navigate([''], {queryParams});
        }
      });
  }

  private handleUrlChange() {
    this.route.queryParams.subscribe((queryParams) => {
      this.onFilter(queryParams['term']);
      if(queryParams['cities'] || queryParams['sectors'] || queryParams['countries']){
        this.handleFilterersValue();
      }
      });
  }

  private handleFilterersValue(){
    this.filteredJobs = this.filteredJobs.filter((job:jobModel) =>{
      if(this.isFilterInclude('sectors',this.sectors,job.sector) || this.isFilterInclude('countries',this.countries,job.country) || 
      this.isFilterInclude('cities',this.citiesList,job.city)  ){
        return true;
      }
      return false;
    })
  }
  private isFilterInclude(key:string,list:string[],jobValue:string):boolean{
    const queryParams = this.route.snapshot.queryParams;
    if(queryParams[key]){
      const citiesIndexes = queryParams[key].split(',');
      for (const index of citiesIndexes) { 
        if(index < list[index] && this.isInclude(jobValue,list[index])){
          return true;
        } 
      }
    }
    return false;
  }

  private onFilter(term: string) {
    if (!term?.length) {
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

  private isInclude(originText: string, term: string): boolean {
    return originText?.toLowerCase().includes(term?.toLowerCase());
  }
}
