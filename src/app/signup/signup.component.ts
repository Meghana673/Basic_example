import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public signUpForm !: FormGroup;
  submitted = false;
  user=environment.userapi;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: ["",Validators.required],
      lastName: ["",Validators.required],
      email: ["",Validators.required],
      password: [""]
    })
  }

  signUp(){
    this.submitted = true;
    if (this.signUpForm.invalid) {
      console.log("Invalid");
      return;
    }
    console.log("valid");

    this.http.post<any>(this.user,this.signUpForm.value)
    .subscribe(res=>{
      alert('SIGNIN SUCCESFUL');
      this.signUpForm.reset();
      this.router.navigate(['login']);
      console.log(this.signUpForm.value);
    },err=>{
      alert("Something went wrong");
    })
  }
  get email()
  {
   return this.signUpForm.get('email');
  }
  get password()
  {
   return this.signUpForm.get('password');
  }
  get firstName()
  {
    return this.signUpForm.get('firstName');
  }
  get lastName()
  {
    return this.signUpForm.get('lastName');
  }
}
