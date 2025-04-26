import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, NgIf } from '@angular/common';
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

  name: string = '';
  phone: string = '';
  color_btn: string = '#00BCD4'; 
  type_lead: string = 'type_lead_5';

  private publicKey = 'gMITTFHhtxUjqlT7_';
  private serviceID = 'service_rzx26ou';
  private emailTemplate = 'template_mb3orn7'; 

  onSubmit(form: any) {
    if (form.valid) {
      const formData = {
        name: form.value.name,
        phone: form.value.phone
      };

      this.sendEmail(formData);
      this.trackConversion();
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

    private trackConversion() {
      if (isPlatformBrowser(this.platformId) && typeof (window as any).gtag === 'function') {
        const eventName = `form_submit_${this.type_lead || 'default'}`;
        (window as any).gtag('event', eventName, {
          'send_to': this.type_lead,
          'value': 1,
          'currency': 'USD'
        });
  
        console.log(`Evento de conversión enviado: ${eventName}`);
      } else {
        console.warn('gtag no está definido o no estamos en navegador.');
      }
    }


}
