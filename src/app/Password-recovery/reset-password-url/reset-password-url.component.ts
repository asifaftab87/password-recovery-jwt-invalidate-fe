import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password-url',
  templateUrl: './reset-password-url.component.html',
  styleUrls: ['./reset-password-url.component.css']
})



export class ResetPasswordUrlComponent implements OnInit {

  constructor(
    private httpClientService: HttpClientService,
    private toastr: ToastrService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  onSubmit(email) {
    this.httpClientService.postEmailForRecovery(email).subscribe(data => {
      console.log(data);
    })
    this.toastr.success("Please check you email for password recorvery")
    //console.log(email);
    this.router.navigate(['/']);

  }



}
