import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClientService } from './../service/http-client.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide-button',
  templateUrl: './slide-button.component.html',

  styleUrls: ['./slide-button.component.css']
})
export class SlideButtonComponent implements OnInit {
  @Input('parentsData') public id: number;
  @Input() parentSildeVal;

  onLeftText = 'ADMIN';
  onRightText = 'STANDARD';
  displayElement = '';
  sildeButton: FormGroup;
  test = false;
  role: string;

  constructor(private httpClientService: HttpClientService, private fb: FormBuilder) {

  }

  ngOnInit() {

    if (this.parentSildeVal === this.onLeftText)
      this.displayElement = this.onLeftText;
    else
      this.displayElement = this.onRightText;


    // console.log("id " + this.id);

    // console.log("role " + this.parentSildeVal);

    this.buttonTriger()
    this.sildeButton = this.fb.group({
      testT: this.test
    });
    this.buttonTriger()
    //this.method1();

  }

  method1() {
    //alert(this.parentSildeVal);
    //console.log(this.id);


    if (this.sildeButton.value.testT) {
      this.displayElement = this.onLeftText;
      // console.log(this.displayElement);
    }
    else {
      this.displayElement = this.onRightText;
      //console.log(this.displayElement);
    }
    //console.log(this.displayElement);

    if (this.displayElement === 'STANDARD') {
      this.role = 'USER';
    }
    else {
      this.role = 'ADMIN';
    }
  }

  buttonTriger() {
    if ('ADMIN'.match(this.parentSildeVal)) {
      this.test = true;
    }
    else {
      this.test = false;
    }
  }
}
