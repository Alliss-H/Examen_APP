import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  emailForm: FormGroup;

  constructor(private fb: FormBuilder, private alertCtrl: AlertController) { 
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnInit() {
  }
  get emailControl() {
    return this.emailForm.get('email');
  }
  async onSubmit() {
    const alert = await this.alertCtrl.create({
      header: 'Correcto',
      message: `Correo enviado: ${this.emailControl?.value}`,
      buttons: ['Listo'],
    });
    await alert.present();
  }

}
