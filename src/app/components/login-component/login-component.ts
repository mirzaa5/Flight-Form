import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-login-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-component.html',
  
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  
  async onLogin(){
      const success = await this.authService.loginWithGoogle();
      if( success ){   
        //redirect to flight form page\
        this.router.navigateByUrl('/flight-form')
        //show login success message
      }else {
        console.log("Login Failed")
      }
  }




}
