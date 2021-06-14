import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Subscription } from 'rxjs';
import { AuthService } from './service/auth.service';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  time : number
  subscription: Subscription
  title = 'WELCOME';
 
  logout(){
    this._authenticationService.logout();
  }


idleState = 'Not started.';
timedOut = false;
lastPing?: Date = null;

constructor(
  private idle: Idle, private keepalive: Keepalive,
  public _authenticationService: AuthService,
  private router: Router,
  private dataService: DataService
  ) {
  // sets an idle timeout of 5 seconds, for testing purposes.
  idle.setIdle(180);
  console.log(this.time)  
  idle.onTimeout.subscribe(() => {
    this.idleState = 'Timed out!';
    this.timedOut = true;
    this.router.navigate(['/']);
  });
  
  idle.onIdleStart.subscribe(() => {
      this.idleState = 'You\'ve gone idle!'
      this.logout();
  });

  this.reset();
}
  ngOnInit(): void {
    this.subscription = this.dataService.receivedData.subscribe(message =>{
      this.time = Number(message);
      console.log(typeof(this.time))
    } )
    
  }

reset() {
  this.idle.watch();
  this.idleState = 'Started.';
  this.timedOut = false;
}


}
