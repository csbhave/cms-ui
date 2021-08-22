import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {

  }
  
  @HostListener('click', ['$event']) onClick(event:any) {
    console.log('component is clicked');
    // console.log(event.target['id']);
    if(event.target['id'] == 'signin'){
      console.log('sign in trigger');
    }
    else if(event.target['id'] == 'signup'){
      console.log('sign up trigger');
    }
 }
}
