import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle, CommonModule,ContactFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent extends BaseComponent{

    constructor(@Inject(PLATFORM_ID) platformId: Object) {
    super(platformId); 
  }


    questions = [
    { question: "HOW MUCH DOES IT COST?", answer: "We provide access to Nutritious Meals and Food Assistance Programs designed for seniors and individuals in need, ensuring they receive well-balanced diets to support overall health and wellness. Our team helps connect individuals to Food Banks, Meal Delivery Services, and Community Dining Programs. We aim to reduce food insecurity and promote better health through tailored nutritional support." ,description_strong:"Call us at 818-208-1077 or email office@sunvidamedicalclinic.com to learn more about our Food Assistance Programs."},
    { question: "HOW DOES IT WORK?", answer: "Skilled Nurses and Caregivers offer Medical and Personal Care Services in the comfort of home, helping patients recover, manage chronic conditions, and maintain independence with Professional Support. Services include Medication Management, Wound Care, Physical Therapy, and Daily Living Assistance. Our goal is to enhance quality of life while ensuring patients receive the compassionate care they need.",description_strong:"For personalized home health care services, contact us today at 818-208-1077 or email office@sunvidamedicalclinic.com." },
    { question: "WHAT LOCATIONS DO YOU SERVE?", answer: "Compassionate, Patient-Centered Palliative care focused on dignity, comfort, and emotional support for patients and families, ensuring quality of life during life’s final stages. Our team provides Pain Management, Counseling, and Spiritual Support to help families navigate this difficult time. We are committed to making each moment meaningful for both the patient and their loved ones.",description_strong:" Let us provide the compassionate support your family needs—call 818-208-1077 or email office@sunvidamedicalclinic.com." },
    { question: "WHAT IS AN ADHC?", answer: "Convenient in-home and in-clinic lab services, including Blood Tests, Screenings, and Diagnostics, providing accurate and timely results to help manage and improve overall health. Our trained professionals ensure a seamless process with minimal discomfort. We work closely with Healthcare Providers to deliver prompt and precise results for optimal treatment planning.",description_strong:"Schedule your lab tests today by calling 818-208-1077 or emailing office@sunvidamedicalclinic.com." },
    { question: "WHAT IS HOME HEALTH CARE?", answer: "We deliver Essential Medical Equipment and Supplies directly to your home, ensuring patients have everything they need to manage their Health Conditions safely and comfortably. Our inventory includes Mobility Aids, Wound Care Products, Respiratory Support Equipment, and more. We strive to make Healthcare at home as convenient and stress-free as possible.",description_strong:"Get the medical supplies you need—call 818-208-1077 or email office@sunvidamedicalclinic.com." },
    { question: "WHAT IS HOSPICE?", answer: "Reliable Prescription refills and medication delivery services bring Essential Medications to your doorstep, ensuring timely access to prescriptions for optimal health and well-being. Our pharmacists provide medication counseling and help manage complex prescriptions. We prioritize accuracy, affordability, and convenience for every patient.",description_strong:"For hassle-free prescription services, call 818-208-1077 or email office@sunvidamedicalclinic.com." }
   
  ];

  callNow(): void {
    window.location.href = "tel:8189227400";
  }
  

  

  
}