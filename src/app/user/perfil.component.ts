import { Component, OnInit, Inject } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service'

@Component({
  templateUrl: './perfil.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})

export class PerfilComponent implements OnInit{
  
  firstName:FormControl
  lastName:FormControl
  perfilForm: FormGroup

  constructor(public auth:AuthService, private router: Router, @Inject(TOASTR_TOKEN) private toatr: Toastr) {
    //regex - regular expressions 
    this.firstName = new FormControl(auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z]*')]);
    this.lastName = new FormControl(auth.currentUser.lastName, Validators.required);
  }
  
  ngOnInit()
  {
      this.perfilForm = new FormGroup({
          firstName: this.firstName,
          lastName: this.lastName
      });
  }


  NoValidFirstName(){
    return this.firstName.invalid && this.firstName.touched;
  }

  NoValidLastName(){
    return this.lastName.invalid && this.lastName.touched;
  }

  fnUpdate(formvalue){
    if(this.perfilForm.valid){
      this.auth.ActualizarUsuari(formvalue.firstName, formvalue.lastName);
      this.toatr.success('Se actualizo el perfil');
      //this.router.navigate(['clases']);
    }
  }
}