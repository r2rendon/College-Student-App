import { Component, Input } from "@angular/core";
import { ISecciones } from '../shared/clase.model';

@Component({
    selector: 'seccion-lista',
    templateUrl: './seccion-list.component.html',
    styles: [`
        .well { padding: 10px; margin: 10px; background-color: #778596; color: white;}
    `]
})

export class SeccionListComponent
{
    @Input() secciones:ISecciones
}
