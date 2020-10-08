import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
declare const $: any;
@Component({
  selector: 'app-ransomeware-subscribe',
  templateUrl: './ransomeware-subscribe.component.html',
  styleUrls: ['./ransomeware-subscribe.component.scss']
})
export class RansomewareSubscribeComponent implements OnInit, AfterViewInit {
  industriesData = [
    {
      view: 'Technology & Media', value: 'TM',
      sectors: ['Information Technology', 'Information Security', 'Telecommunications', 'Media']
    },
    {
      view: 'Financial Services', value: 'FS',
      sectors: ['Banking', 'Insurance', 'Real Estate', 'Diversified Financial Services']
    },
    {
      view: 'Life Sciences', value: 'LS',
      sectors: ['Pharmaceuticals & Biotechnology', 'Healthcare', 'Cosmetics']
    },
    {
      view: 'Manufacturing & Industrials', value: 'MI',
      sectors: ['Automotive', 'Aviation', 'Industrial Productse', 'Construction & Demolition', 'Technology']
    },
    {
      view: 'Professional & Consumer Services', value: 'PCS',
      sectors: ['Retail', 'Logistics', 'Legal', 'Facilities', 'Travel']
    },
    {
      view: 'Public Services', value: 'PS',
      sectors: ['Education', 'Utilities', 'Government', 'Transportation']
    },
    {
      view: 'All', value: 'AL'
    }
  ];

  notificationTypes = [
    { view: 'Live Notifications', value: 'live' },
    { view: 'Daily Notifications', value: 'daily' },
    { view: 'Weekly Notifications', value: 'weekly' },
    { view: 'Monthly Notifications', value: 'monthly' }
  ];

  compareData = [
    { view: 'Technology & Media', industry: 'TM', notificationType: 'live', listId: 6 },
    { view: 'Technology & Media', industry: 'TM', notificationType: 'daily', listId: 15 },
    { view: 'Technology & Media', industry: 'TM', notificationType: 'weekly', listId: 16 },
    { view: 'Technology & Media', industry: 'TM', notificationType: 'monthly', listId: 17 },

    { view: 'Financial Services', industry: 'FS', notificationType: 'live', listId: 18 },
    { view: 'Financial Services', industry: 'FS', notificationType: 'daily', listId: 19 },
    { view: 'Financial Services', industry: 'FS', notificationType: 'weekly', listId: 20 },
    { view: 'Financial Services', industry: 'FS', notificationType: 'monthly', listId: 21 },

    { view: 'Life Sciences', industry: 'LS', notificationType: 'live', listId: 22 },
    { view: 'Life Sciences', industry: 'LS', notificationType: 'daily', listId: 23 },
    { view: 'Life Sciences', industry: 'LS', notificationType: 'weekly', listId: 24 },
    { view: 'Life Sciences', industry: 'LS', notificationType: 'monthly', listId: 25 },

    { view: 'Manufacturing & Industrials', industry: 'MI', notificationType: 'live', listId: 26 },
    { view: 'Manufacturing & Industrials', industry: 'MI', notificationType: 'daily', listId: 27 },
    { view: 'Manufacturing & Industrials', industry: 'MI', notificationType: 'weekly', listId: 28 },
    { view: 'Manufacturing & Industrials', industry: 'MI', notificationType: 'monthly', listId: 29 },

    { view: 'Professional & Consumer Services', industry: 'PCS', notificationType: 'live', listId: 30 },
    { view: 'Professional & Consumer Services', industry: 'PCS', notificationType: 'daily', listId: 31 },
    { view: 'Professional & Consumer Services', industry: 'PCS', notificationType: 'weekly', listId: 32 },
    { view: 'Professional & Consumer Services', industry: 'PCS', notificationType: 'monthly', listId: 33 },

    { view: 'Public Services', industry: 'PS', notificationType: 'live', listId: 34 },
    { view: 'Public Services', industry: 'PS', notificationType: 'daily', listId: 35 },
    { view: 'Public Services', industry: 'PS', notificationType: 'weekly', listId: 36 },
    { view: 'Public Services', industry: 'PS', notificationType: 'monthly', listId: 37 },

    { view: 'All', industry: 'AL', notificationType: 'live', listId: 38 },
    { view: 'All', industry: 'AL', notificationType: 'daily', listId: 39 },
    { view: 'All', industry: 'AL', notificationType: 'weekly', listId: 40 },
    { view: 'All', industry: 'AL', notificationType: 'monthly', listId: 41 }
  ];

  subscribeForm: FormGroup;
  disabledSubmitButton: boolean;
  isBusiness: boolean;
  isSubscribeSuccess: string;
  isSent: boolean;
  errorMessage: string = '';
  activedIndustry: string = '';
  tooltipTexts = '';
  
  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    // private newsletterService: NewsletterService,
    private formBuilder: FormBuilder,
    // config: NgbModalConfig,
    // private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngAfterViewInit() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

  initForm() {
    this.subscribeForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email])],
      type: ['', Validators.compose([
        Validators.required
      ])],
      industry: ['', Validators.compose([
        Validators.required
      ])],
      agree: [false]
    });

    this.subscribeForm.valueChanges.subscribe((res: any) => {
      this.isSent = false;
      this.isSubscribeSuccess = 'pending'
    })

    this.subscribeForm.controls['industry'].valueChanges.subscribe(value => {

      this.industriesData.map((item) => {
        if (item.value === value) {
          this.activedIndustry = item.value;
        }
      });

      console.log('res: ', this.tooltipTexts)
    })
  }

  onSubmit() {
    const controls = this.subscribeForm.controls;
    if (this.subscribeForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    };

    // this.isSent = true;
    // this.isBusiness = this.checkBusinessEmail(controls.email.value);
    // console.log('isBusiness: ', this.isBusiness)
    // if (!this.isBusiness) {
    //   return;
    // }

    // this.showSpinner('infoSpinner');
    // let listIds = []

    // this.compareData.map((item) => {
    //   if (item.industry === controls.industry.value && item.notificationType === controls.type.value) {
    //     listIds.push(item.listId);
    //   }
    // });

    // const subData = {
    //   "email": controls.email.value,
    //   "listIds": listIds,
    //   "attributes": {
    //     "DOUBLE_OPT-IN": true,
    //     "OPT-IN": true
    //   }
    // }

    // console.log('sudData: ', subData)
    // this.newsletterService.addContactToList(subData).subscribe((res: any) => {
    //   console.log('subscribe success: ', res);
    //   this.hideSpinner('infoSpinner');
    //   this.initForm();
    //   this.isSubscribeSuccess = 'success';
    //   setTimeout(() => {
    //     this.closeAlert();
    //   }, 2000);
    // }, (error) => {
    //   console.log('subscribe failed: ', error);
    //   if (error.error.code === 'duplicate_parameter') {
    //     this.reSubscribe(subData);
    //   } else {
    //     this.errorMessage = error.error.message;
    //     this.isSubscribeSuccess = 'failed';
    //     this.hideSpinner('infoSpinner');
    //   }
    // })
  }

  get getAgree() {
    return this.subscribeForm.controls.agree.value
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.subscribeForm.controls[controlName];
    if (!control) {
      return false;
    }
    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }
}
