import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedPageComponent } from './activated-page/activated-page.component';
import { ActivatedRoutingModule } from './activated-routing.module'
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ActivatedPageComponent
  ],
  imports: [
    CommonModule,
    ActivatedRoutingModule,
    MatTableModule
  ]
})
export class ActivatedModule { }
