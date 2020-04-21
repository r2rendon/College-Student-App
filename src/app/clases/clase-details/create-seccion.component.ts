import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import  { ClaseService } from "../shared/clase.service"
import { ActivatedRoute } from "@angular/router"
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ISecciones } from '../shared/clase.model';

@Component({
    selector: 'create-seccion',
    templateUrl: './create-seccion.component.html',
    styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})

export class CreateSeccionComponent implements OnInit
{
    name: FormControl
    profesor: FormControl
    duracion: FormControl
    descripcion: FormControl

    seccionForm: FormGroup
    seccion:ISecciones
    @Output() opCancelarClick = new EventEmitter()
    @Output() opGuardarClick = new EventEmitter()
    
    constructor(private claseService: ClaseService, private actro: ActivatedRoute)
    {

    }
    
    private palabrasNoValidas(control: FormControl): {[key:string]: any}
    {
        return control.value.includes('fresa')
        ? {'palabrasNoValidas': 'fresa'}
        : null;
    }

    ngOnInit() {
      this.descripcion = new FormControl('', [Validators.required, Validators.maxLength(100)])   
      this.profesor = new FormControl('', [Validators.required])   
      this.duracion = new FormControl('', [Validators.required])   
      this.name = new FormControl('', [Validators.required])   

      this.seccionForm = new FormGroup({
        descripcion: this.descripcion,
        name : this.name,
        profesor: this.profesor,
        duracion: this.duracion
      });
    }

    fnSave(formvalue){
      
      this.seccion = {
        descripcion: formvalue.descripcion,
        duracion: formvalue.duracion,
        id: 0,
        name: formvalue.name,
        profesor: formvalue.profesor
      }

      this.opGuardarClick.emit(this.seccion);
      //api/clases/1/secciones
    }

    fnCancelar()
    {
      this.opCancelarClick.emit();
    }
  
}