import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { GrabacionComponent } from './grabacion.component';

const routes: Routes = [
  {
    path: '',
    component: GrabacionComponent
  }
];

@NgModule({
  declarations: [
    GrabacionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class GrabacionModule { }