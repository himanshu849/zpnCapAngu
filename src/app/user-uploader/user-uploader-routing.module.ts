import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserUploaderPage } from './user-uploader.page';

const routes: Routes = [
  {
    path: '',
    component: UserUploaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserUploaderPageRoutingModule {}
