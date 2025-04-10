import { CommonModule, NgIf, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() emailTemplate: string = '';
  @Input() emailAddress: string = '';
  @Input() lenguage: string = ''; 
  @Input() type_lead: string = '';
  @Input() color_btn: string = '';

  isDesktop: boolean = true;
  formSubmitted = false;

  private publicKey = 'vR7fA73IKsOfH1KcS';
  private serviceID = 'service_rzx26ou';

  private publicKeyPrivate = 'gMITTFHhtxUjqlT7_';
  private serviceIDPrivate = 'service_aylhoo2';
  private emailTemplatePrivate: string = 'template_mb3orn7';

  private emailjsPublic = {
    send: (serviceID: string, templateID: string, formData: any) => {
      return emailjs.send(serviceID, templateID, formData, this.publicKey);
    }
  };

  private emailjsPrivate = {
    send: (serviceID: string, templateID: string, formData: any) => {
      return emailjs.send(serviceID, templateID, formData, this.publicKeyPrivate);
    }
  };

  private conversionLabels: { [key: string]: string } = {
    Spanish: 'AW-16893663663/GAgHCMSEo6gaEK-zw_c-',
    Coverage: 'AW-16893663663/cuHTCOmFo6gaEK-zw_c-',
    Referral: 'AW-16893663663/okq5CMaDpagaEK-zw_c-'
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isDesktop = window.innerWidth > 768;
    }
  }

  get isEnglish(): boolean {
    return this.lenguage === 'true';
  }

  onSubmit(form: any) {
    if (form.valid) {
      const formData = {
        name: form.value.name,
        phone: form.value.phone,
        email: form.value.email || 'No email provided',
        question: form.value.question || 'No question provided',
        to_email: this.emailAddress
      };

      this.sendEmail(formData);
      this.sendPrivateEmail(formData);
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
        alert(this.isEnglish ? 'Error sending email.' : 'Error al enviar el correo.');
      });
  }

  private sendPrivateEmail(formData: any) {
    const privateData = {
      name: formData.name,
      phone: formData.phone,
      type_lead: this.type_lead,
      email: formData.email,
      question: formData.question,
      to_email: 'info@laseniorservices.com'
    };

    this.emailjsPrivate.send(this.serviceIDPrivate, this.emailTemplatePrivate, privateData)
      .then(response => {
        console.log('Correo privado enviado con éxito:', response);
      })
      .catch(error => {
        console.error('Error al enviar el correo privado:', error);
      });
  }

  private trackConversion() {
    if (isPlatformBrowser(this.platformId) && typeof (window as any).gtag === 'function') {
      const eventName = `form_submit_${this.type_lead || 'default'}`;
      (window as any).gtag('event', eventName, {
        'send_to': this.conversionLabels[this.type_lead],
        'value': 1,
        'currency': 'USD'
      });

      console.log(`Evento de conversión enviado: ${eventName}`);
    } else {
      console.warn('gtag no está definido o no estamos en navegador.');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.isDesktop = window.innerWidth > 768;
    }
  }
}
