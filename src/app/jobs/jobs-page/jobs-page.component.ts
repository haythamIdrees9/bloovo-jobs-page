import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.scss']
})
export class JobsPageComponent  {
  filterOpened:boolean = false;
  @HostListener('document:click', ['$event'])
  onClick() {
    console.log('filterOpened',this.filterOpened);
    
    this.filterOpened = false;
  }
}
