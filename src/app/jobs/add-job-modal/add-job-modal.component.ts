import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { citiesList, CountryEnum, SectorEnum, wholeCitiesList } from '../job-model';
import { JobsDataService } from '../jobs-data.service';

@Component({
  selector: 'app-add-job-modal',
  templateUrl: './add-job-modal.component.html',
  styleUrls: ['./add-job-modal.component.scss']
})
export class AddJobModalComponent implements OnInit {
  sectors = Object.values(SectorEnum);
  countries = Object.values(CountryEnum);
  citiesList:any = citiesList;
  selectedSector!:SectorEnum|any;
  selectedCountry!:CountryEnum|any;
  selectedCity:string = "";
  title:string = "";
  description:string = "";
  @Output('close') closeEmitter = new EventEmitter();
  constructor(private readonly jobsDataService:JobsDataService) { }

  ngOnInit(): void {
  }

  createJob(){
    this.jobsDataService.addJob({id:0,userId:0,title:this.title,sector:this.selectedSector,country:this.selectedCountry,city:this.selectedCity,description:this.description})
    this.closeEmitter.emit();
    
  }

  cancel(){
    this.closeEmitter.emit();
  }
}
