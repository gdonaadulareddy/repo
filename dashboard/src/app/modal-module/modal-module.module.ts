import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ModalModuleModule { }
