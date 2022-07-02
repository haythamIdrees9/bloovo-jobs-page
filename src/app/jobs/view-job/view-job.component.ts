import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { jobModel } from '../job-model';

@Component({
  selector: 'app-view-job[job]',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.scss']
})
export class ViewJobComponent implements OnInit {

  @Input('job') job !:jobModel;
  @Output('close') closeEmitter = new EventEmitter();;
  constructor() { }

  ngOnInit(): void {
  }
  cancel() {
    this.closeEmitter.emit();
  }
}
