import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomModal } from './custom-modal/custom-modal.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
@NgModule({
  imports:[CommonModule,ReactiveFormsModule],
  declarations: [CustomModal, CustomSelectComponent],
  exports: [CustomModal, CustomSelectComponent],
})
export class CustomModule {}
