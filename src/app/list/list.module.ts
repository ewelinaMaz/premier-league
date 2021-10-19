import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ItemComponent } from '../item/item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, ItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ListComponent }]),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ListModule {}
