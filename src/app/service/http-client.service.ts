import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  url = environment.api_url;

  constructor(private http: HttpClient) { }

  /* post email id for password recovery */
  public postEmailForRecovery(username): Observable<any> {
    return this.http.post('/server/reset/password/url', username);

  }

  /* post jwt token and password for password recovery */
  public postTokenAndPasswordForRecovery(password, token): Observable<any> {
    return this.http.put('/server/update/password?cipherText=' + token, password);

  }

  /* Call BE before logout to make JWT invalid */
  public callBeforeLogout(): Observable<any> {
    console.log("gets called")
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/token/invalidate',
    { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });

  }

}


