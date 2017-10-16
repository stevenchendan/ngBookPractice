import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validations-short-hand',
  templateUrl: './demo-form-with-validations-short-hand.component.html',
  styleUrls: ['./demo-form-with-validations-short-hand.component.css']
})
export class DemoFormWithValidationsShortHandComponent implements OnInit {
  myForm: FormGroup;

  ngOnInit() {
  }

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });
  }

  OnSubmit(value: any): void {
    console.log('valid.sku', value.sku);
  }

}
