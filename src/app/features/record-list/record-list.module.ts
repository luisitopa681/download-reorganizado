import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { RecordListComponent } from './record-list.component';

const routes: Routes = [
  {
    path: '',
    component: RecordListComponent
  }
];

@NgModule({
  declarations: [
    RecordListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class RecordListModule { }