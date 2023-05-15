import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  loginForm=new FormGroup({
    mail:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  })

  login()
  {
    console.log(this.loginForm.value)
  }
   get mail()
   {
    return this.loginForm.get('mail');
   }
   get password()
   {
    return this.loginForm.get('password');
   }
}
