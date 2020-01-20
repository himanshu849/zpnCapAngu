import { Injectable } from "@angular/core";
import { ToastController } from '@ionic/angular';

@Injectable()

export class ToastControlerService {
    constructor(public toastController: ToastController) {

    }

    async successToast(message: any) {
        const toast = await this.toastController.create({
          message: message,
          duration: 3000,
          color: 'success'
        });
        toast.present();
    }

    async failureToast(message: any) {
        const toast = await this.toastController.create({
          message: message,
          duration: 3000,
          color: 'danger'
        });
        toast.present();
    }
}