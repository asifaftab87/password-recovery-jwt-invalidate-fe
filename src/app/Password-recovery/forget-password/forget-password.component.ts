import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
  
import { ConfirmedValidator } from '../../confirmed.validator';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  data: string = ''
  
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private httpClientService: HttpClientService
    ) {

      this.activatedRoute.queryParams.subscribe( data =>{
        this.data = data["cipherText"];
        // console.log(typeof(data));
        console.log(data["cipherText"]);
      })
  
    this.form = fb.group({
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'confirm_password')
    })


  }
  ngOnInit() {
  }    
  get f(){
    return this.form.controls;
  }
   
  submit(){

    this.httpClientService.postTokenAndPasswordForRecovery(this.form.value["password"], this.data).subscribe(data => {
      console.log(data);
    })
    // console.log(this.form.value["password"]);
  } 
  

}
