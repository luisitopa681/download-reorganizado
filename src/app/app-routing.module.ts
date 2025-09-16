import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'records',
    loadChildren: () => import('./features/record-list/record-list.module').then(m => m.RecordListModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'record-cards',
    loadChildren: () => import('./features/record-card-list/record-card-list.module').then(m => m.RecordCardListModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'grabaciones',
    loadChildren: () => import('./features/grabacion/grabacion.module').then(m => m.GrabacionModule),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }