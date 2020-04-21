import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ClaseService } from './shared/index';
import { IClase } from './shared/clase.model';
import { EventEmitter } from 'protractor';

@Component({
    templateUrl: './create-clase.component.html',
    styles: [`
      em {float:right; color:#E05C65; padding-left: 10px;}
      .error input {background-color:#E3C3C5;}
      .error ::-webkit-input-placeholder { color: #999; }
      .error ::-moz-placeholder { color: #999; }
      .error :-moz-placeholder { color:#999; }
      .error :ms-input-placeholder { color: #999; }
    `]
})
export class CreateClaseComponent
{
    claseObj:IClase
    isFormDirty:boolean = true    

    constructor(private router: Router, private claseserv: ClaseService) {

    }

    ngOnInit(){
        this.claseObj = {
            id : 9,
            time : '10:00 pm',
            name: 'Experiencia usuario reloaded',
            location: {
                campus: 'SPS',
                room: 'LSW'
            }
        }
    }

    saveClase(formvalue){
        console.log(formvalue);
        this.claseserv.saveClase(formvalue).subscribe(() => {
            this.isFormDirty = false;
            this.router.navigate(['/clases'])
        });
    }

    fnGoBack()
    {
        this.router.navigate(['/clases'])
    }
}