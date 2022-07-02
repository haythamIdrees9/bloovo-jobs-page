import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation[title][description][confirmText]',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent {
  @Output('close') closeEmitter = new EventEmitter();
  @Output('confirm') ConfirmEmitter = new EventEmitter();
  @Input('description') description: string = '';
  @Input('confirmText') confirmText: string = '';
  @Input('title') title: string = '';

  constructor() {}
  cancel() {
    this.closeEmitter.emit();
  }

  confirm() {
    this.ConfirmEmitter.emit();
  }
}
