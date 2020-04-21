import { Component, OnInit } from '@angular/core';
import { ClaseService } from './shared/clase.service'
import { IClase } from './shared/clase.model';

declare let toastr:any

@Component({
    selector: 'clases-lista',
    template: `
        <div>
            <h1> Listado de clases</h1>
            <hr/>
            <div class="row">
                <div *ngFor="let pClase of ClasesDisponible" class="col-md-6">
                    <event-thumbnail (click)="toasterClick()" [clase]="pClase" class="col-md-6"></event-thumbnail>
                <div>
            </div>
        <div>
    `
})
 
export class ClasesListaComponent implements OnInit{
    
    ClasesDisponible:IClase[]
    claseService:any

    constructor(pClaseService: ClaseService){
        this.claseService = pClaseService;
    }   

    ngOnInit()
    {
        this.claseService.getClases().subscribe(data => { this.ClasesDisponible = data});
    }

    toasterClick()
    {
        toastr.success('Hola');
    }

}
  