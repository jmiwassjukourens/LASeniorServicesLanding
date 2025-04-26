import { Component, Inject, PLATFORM_ID  } from '@angular/core';
import {  CommonModule, isPlatformBrowser, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-referral-others',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './referral-others.component.html'
})
export class ReferralOthersComponent extends BaseComponent{
  
constructor(@Inject(PLATFORM_ID) platformId: Object) {
    super(platformId);
  }
  emailTemplate: string = 'template_5som7eg';
  emailAddress: string = 'info@laseniorservices.com';
  type_lead: string = 'type_lead_4';
  color_btn: string = '';

  formSubmitted = false;

  private publicKey = 'gMITTFHhtxUjqlT7_';
  private serviceID = 'service_aylhoo2';



  private emailjsPublic = {
    send: (serviceID: string, templateID: string, formData: any) => {
      return emailjs.send(serviceID, templateID, formData, this.publicKey);
    }
  };


onSubmit(form: any) {
  if (form.valid) {
    const formData = {
      referralSourceName: form.value.referralSourceName,
      referralSourcePhone: form.value.referralSourcePhone,
      patientName: form.value.patientName,
      patientPhone: form.value.patientPhone,
      interest: form.value.interest,
      to_email: this.emailAddress
    };

    this.sendEmail(formData);
    this.trackConversion();

    this.formSubmitted = true;
    form.reset();
  }
}


  private sendEmail(formData: any) {
    this.emailjsPublic.send(this.serviceID, this.emailTemplate, formData)
      .then(response => {
        console.log('Correo enviado con éxito:', response);
      })
      .catch(error => {
        console.error('Error al enviar el correo:', error);
        alert('Error sending email.');
      });
  }



  private trackConversion() {
    if (isPlatformBrowser(this.platformId) && typeof (window as any).gtag === 'function') {
      const eventName = `form_submit_${this.type_lead || 'default'}`;
      (window as any).gtag('event', eventName, {
        'send_to':this.type_lead,
        'value': 1,
        'currency': 'USD'
      });

      console.log(`Evento de conversión enviado: ${eventName}`);
    } else {
      console.warn('gtag no está definido o no estamos en navegador.');
    }
  }
}
