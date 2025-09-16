import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { RecordCardListComponent } from './record-card-list.component';

const routes: Routes = [
  {
    path: '',
    component: RecordCardListComponent
  }
];

@NgModule({
  declarations: [
    RecordCardListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class RecordCardListModule { }