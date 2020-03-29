import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'dahsboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MemberRoutingModule { }
