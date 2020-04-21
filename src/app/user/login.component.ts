import { Component } from '@angular/core'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: ['label,button { color:white; }', 'em { float:right; color:#ff8080    ; padding-left:10px; }']
})

export class LoginComponent {
      
    mouseoverlogin
    userName
    password
    
    constructor(private authService: AuthService, private router: Router) {

    }

    fnLogin(formvalues) {
        this.authService.loginUser(formvalues.userName, formvalues.password);
        this.router.navigate(['clases']);
    }
    
    fnCancel() {
      this.router.navigate(['clases']);
  }
}