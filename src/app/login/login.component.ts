import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });
  // constructor(private auth: AuthService, private router: Router) {}

  // ngOnInit(): void {
  //   if (this.auth.isLoggedIn()) {
  //     this.router.navigate(['admin']);
  //   }
  // }
  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     this.auth.login(this.loginForm.value).subscribe(
  //       (result) => {
  //         console.log(result);
  //         this.router.navigate(['/crud']);
  //       },
  //       (err: Error) => {
  //         alert(err.message);
  //       }
  //     );
  //   }
  // }
  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private authservice:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['', Validators.required]
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signup")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert('Login Succesful');
        this.loginForm.reset()
      this.router.navigate(["home"]);
      this.authservice.validateAuth(true);
      }else{
        alert("user not found")
      }
    },err=>{
      alert("Something went wrong")
    })
  }
  
  get email()
  {
   return this.loginForm.get('email');
  }
  get password()
  {
   return this.loginForm.get('password');
  }
}
