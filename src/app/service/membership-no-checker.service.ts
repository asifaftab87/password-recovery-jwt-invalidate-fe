import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembershipNoCheckerService {

  letter = /^[A-Za-z]+$/;
  number = /\d/;

  valid: Boolean = false;

  constructor() { }

  alphabetCheck(alpha) {

    if (alpha.match(this.letter) && alpha == alpha.toUpperCase()) {
      // console.log("yes it is alphabet with upper case " + alpha);
      return true;
    }
    else return false;
  }

  membershipNoCheck(membershipNo) {
   
    let char1 = membershipNo.charAt(0);
    let char2 = membershipNo.charAt(1);
    let char3 = membershipNo.charAt(2);
    let char4 = membershipNo.charAt(3);
    let char5 = membershipNo.charAt(4);
    let char6 = membershipNo.charAt(5);
    let char7 = membershipNo.charAt(6);

    if ((!(char1 == char1.toUpperCase()) && (char1 !== char1.toLowerCase()))) {
      console.log("except capital letter char1: " + char1)
    }
    if (this.alphabetCheck(char1)) {
      this.valid = true;
    }
    else {
      this.valid = false;
      alert("first letter should be alphabet and uppercase of membership number");
    }

    if (this.number.test(char2)) {
      this.valid = true;
    }
    else {
      this.valid = false;
      alert("second letter should be number of membership number");
    }
    if (this.number.test(char3)) {
      this.valid = true;
    }
    else {
      this.valid = false;
      alert("third letter should be number of membership number");
    }
    if (this.number.test(char4)) {
      this.valid = true;
    }
    else {
      this.valid = false;
      alert("forth letter should be number of membership number");
    }
    if (this.number.test(char5)) {
      this.valid = true;
    }
    else {
      this.valid = false;
      alert("fifth letter should be number of membership number");
    }

    // if (num.length == 4 && /\d/.test(num)) {
    //   console.log("numbers")
    // }
    // else{
    //   this.valid = false;
    //   alert("second, third,forth and fifth letter should be number of membership number");
    // }

    if (this.number.test(char7)) {
      this.valid = true;
    }
    else {
      this.valid = false;
      alert("seventh letter should be number of membership number");
    }

    if (char6.indexOf('-') > -1) {
      console.log("the 6th letter is - ")
    }
    else {
      this.valid = false;
      alert("sixth letter should be hypen ('-') of membership number");
    }

    return this.valid;
  }

}
