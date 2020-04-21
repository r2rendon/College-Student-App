import { Component, Inject } from '@angular/core'
import { AuthService } from '../user/auth.service';
import { ClaseService } from '../clases';
import { ISecciones } from '../clases/shared/clase.model';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles:[
        `.navbar-default {
            background-color: #414952;
            color: aliceblue;
        }`,
        `a {
            color: #f5f5f5;
            text-decoration: none;
            background-color: transparent;
        }`,
        `
        .list-group-item {
            color: black;
            font-weight: bold;
        }
        `
    ]
})

export class NavBarComponent
{
    textoABuscar:any;
    foundSecciones:ISecciones[];

    constructor(public auth:AuthService, private claseService:ClaseService) {
        
    } 

    buscarSecciones(texto){
        this.claseService.SearchSecciones(texto).subscribe(secciones =>{
            this.foundSecciones = secciones;
            console.log(secciones);
        });
    }
} 