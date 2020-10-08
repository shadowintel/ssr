import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsletterService } from '../../_services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  errorMessage: string = '';
  sentSuccess: boolean;
  isSent: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private newsletterService: NewsletterService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email])],
      subject: ['', Validators.compose([
        Validators.required
      ])],
      message: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.contactForm.valueChanges.subscribe((res: any) => {
      this.isSent = false;
    })
  }

  onSubmit() {
    const controls = this.contactForm.controls;
    console.log('this is form: ', this.contactForm.value)
    console.log('this is controls: ', this.contactForm.invalid)

    if (this.contactForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    };
    // this.spinner.show();
    this.isSent = true;
    console.log('this is form: ', this.contactForm.value)

    this.newsletterService.sendMessageToSupport(this.contactForm.value).subscribe((res: any) => {
      console.log('sent successfully to support: ', res);
      this.initForm();
      this.sentSuccess = true;
      // this.spinner.hide();
    }, (error) => {
      this.sentSuccess = false;
      console.log('sending message failed: ', error);
      this.errorMessage = error.error.message;
      // this.spinner.hide();
    })
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    // console.log('detecting')
    const control = this.contactForm.controls[controlName];
    if (!control) {
      return false;
    }
    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  closeAlert() { }

}
