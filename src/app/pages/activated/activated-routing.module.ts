import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedPageComponent } from './activated-page/activated-page.component'

const routes: Routes = [
  {
    path: '',
    component: ActivatedPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivatedRoutingModule {}
