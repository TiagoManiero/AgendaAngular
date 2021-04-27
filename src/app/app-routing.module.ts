import { NgModule } from '@angular/core';
import {  CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
