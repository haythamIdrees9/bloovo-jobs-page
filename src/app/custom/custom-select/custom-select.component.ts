import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-select[placeholder][selectName][options]',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {
  @Input('placeholder') placeholder:string='';
  @Input('selectName') selectName:string='';
  @Input('options') set setOptions(options:string[]){
    if(!!window){
      setTimeout(()=>{
        this.options = options;
        this.onSelectOption("")
        this.filterControl.setValue(this.filterControl.value)
      })
    }
  } 
  options:string[] = [];
  @Input('disabled') disabled:boolean = false;
  
  @Output('onselect') onSelectEmitter:EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('container') container!:ElementRef;
  filterControl:FormControl = new FormControl();
  filteredOptions:string[]=[];
  selectedOption!:string;
  opened:boolean = false;
  constructor() { }

  ngOnInit(): void {
  this.filteredOptions = this.options;
  this.handleFilterChange();
  }

  handleFilterChange(){
    this.filterControl.valueChanges
    .subscribe((term:string) => {
      if(term){
        this.filteredOptions = this.options.filter(item => item?.toLowerCase().includes(term?.toLowerCase()))
      } else {
        this.filteredOptions = this.options;
      }
    });
  }

  @HostListener('document:click', ['$event'])
  closeOptions(event:Event) {
    if(!this.container?.nativeElement?.contains(event?.target)){
      this.opened = false;
    }
  }

  onSelectOption(selectedOption:string){
    this.selectedOption = selectedOption;
    this.onSelectEmitter.emit(selectedOption);
  }


}
