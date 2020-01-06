import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserUploaderPageRoutingModule } from './user-uploader-routing.module';

import { UserUploaderPage } from './user-uploader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserUploaderPageRoutingModule
  ],
  declarations: [UserUploaderPage]
})
export class UserUploaderPageModule {}
