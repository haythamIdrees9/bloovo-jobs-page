import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModal implements OnInit,OnDestroy {

  @Output('closeModal') closeModalEmitter = new EventEmitter<void>();
  isModalClosed:boolean = false;
  constructor() { }

  @HostListener('document:click', ['$event'])
  closeModal(event?:Event) {
    if(!event?.defaultPrevented && !!window){
      this.isModalClosed = true;
      setTimeout(()=>{
        this.closeModalEmitter.next();
      },450)
    }
  }

  ngOnInit(): void {
    document.body.style.overflowY ='hidden';
    const rootContainer = document.getElementById('root-container');
    if(rootContainer){      
      rootContainer.style.overflowY = "hidden";
    }
  }

  ngOnDestroy(): void {
    document.body.style.overflowY ='auto';
    const rootContainer = document.getElementById('root-container');
    if(rootContainer){      
      rootContainer.style.overflowY = "auto";
    }
  }

}
