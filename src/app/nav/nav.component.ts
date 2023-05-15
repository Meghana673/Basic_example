import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  auth:boolean=false;
  constructor(private authService:AuthService) { }
  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      data =>
      {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );
  }
}
