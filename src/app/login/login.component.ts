import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validMessage: string = "";

  loading: boolean = false;
  loginForm: FormGroup;

  logUser: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder    
    ) { }

    public loginPass: boolean = true;

  ngOnInit(): void {


    if (this.authService.isAuthenticated) {
      this.router.navigate(['/manageBuaya']);
    }
    this.logUser = this.fb.group(
      {
        username: '',
        password: '',
      }
    )

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })


  }

  public login() {

    this.loading = true;
    console.log("username: " + this.logUser["username"]);
    //console.log("password: " + this.logUser['password']);
    //this.authService.login(this.model.username, this.model.password);
    this.authService.doLogin(this.logUser.value);
    

    console.log('fail to login');
    this.loginPass = false;
  }

  onLonIn() {

    console.log(this.logUser.value);

  }
}
