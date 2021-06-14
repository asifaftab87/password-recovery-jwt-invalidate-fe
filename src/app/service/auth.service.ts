import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { DataService } from './data.service';
import { HttpClientService } from './http-client.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const helper = new JwtHelperService();

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    public router: Router,
    private dataServie: DataService,
    private httpClientService: HttpClientService
  ) { }

  public login(username: string, password: string) {

    const body = new URLSearchParams();

    body.set("username", username);
    body.set("password", password);

    console.log("username: " + username);
    //console.log("password: " + password);

    return this.http.post("/server/authenticate", body.toString(), httpOptions).subscribe(
      (response: Response) => {

        console.log("response.status: " + response.status);

        this.router.navigate(['welcome']);

      }
    );
  }

  public doLogin(login) {

    let body = JSON.stringify(login);
   
    return this.http.post("/server/authenticate", body, httpOptions).subscribe(
      (response: Response) => {

        // console.log(response);
        // console.log("response.status: " + response["jwt"]);
        console.log("response.status: " + response["sessionTime"]);
        this.dataServie.changedData(response["sessionTime"]);


        //sessionStorage.setItem('username', username); 
        let tokenStr = 'Bearer ' + response["jwt"];
        sessionStorage.setItem('token', tokenStr);
        localStorage.setItem('access_token', response["jwt"]);

        // for (var key in response) {
        //   console.log(key + "  :  " + response[key]);
        // }
        this.router.navigate(['/manageBuaya']);

      },
      error => {
         console.log("bad credentials")
      }
    );

  }

  public handleAuthentication(): void {

  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {

    //calling BE before logout
    this.httpClientService.callBeforeLogout().subscribe(data => {
      
    })

    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    sessionStorage.clear();
    localStorage.clear;
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time

    let token = localStorage.getItem('access_token');
    let result: boolean;
    const isExpired = helper.isTokenExpired(token);
    //console.log("isExpired: " + isExpired);

    return !isExpired;
  }

  isUserLoggedIn(){

  }


}