import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomModal } from './custom-modal/custom-modal.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { CustomPaginationComponent } from './custom-pagination/custom-pagination.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports:[CommonModule,ReactiveFormsModule,RouterModule],
  declarations: [CustomModal, CustomSelectComponent, CustomPaginationComponent],
  exports: [CustomModal, CustomSelectComponent,CustomPaginationComponent],
})
export class CustomModule {}
