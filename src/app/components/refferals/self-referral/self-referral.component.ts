import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-self-referral',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './self-referral.component.html'
})
export class SelfReferralComponent extends BaseComponent {

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    super(platformId);
  }

  formSubmitted = false;

  fullName: string = '';
  phoneNumber: string = '';
  color_btn: string = '#00BCD4'; // azul como el botón de la imagen

  private publicKey = 'vR7fA73IKsOfH1KcS';
  private serviceID = 'service_rzx26ou';
  private emailTemplate = 'template_xxxxxx'; // reemplazá por tu ID real

  onSubmit(form: any) {
    if (form.valid) {
      const formData = {
        fullName: form.value.fullName,
        phoneNumber: form.value.phoneNumber,
        to_email: 'info@laseniorservices.com'
      };

      this.sendEmail(formData);
      this.formSubmitted = true;
      form.reset();
    }
  }

  private sendEmail(formData: any) {
    emailjs.send(this.serviceID, this.emailTemplate, formData, this.publicKey)
      .then(response => {
        console.log('Correo enviado con éxito:', response);
      })
      .catch(error => {
        console.error('Error al enviar el correo:', error);
        alert('Error sending email.');
      });
  }
}
