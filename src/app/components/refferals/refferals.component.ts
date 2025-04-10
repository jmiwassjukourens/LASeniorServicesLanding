import { Component, Inject, PLATFORM_ID  } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ReferralOthersComponent } from './referral-others/referral-others.component';
import { SelfReferralComponent } from './self-referral/self-referral.component';


@Component({
  selector: 'app-refferals',
  standalone: true,
  imports: [ReferralOthersComponent,SelfReferralComponent],
  templateUrl: './refferals.component.html'
})
export class RefferalsComponent extends BaseComponent{

  
constructor(@Inject(PLATFORM_ID) platformId: Object) {
    super(platformId);
  }

}
