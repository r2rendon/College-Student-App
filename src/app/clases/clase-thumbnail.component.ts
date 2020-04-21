import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IClase } from './shared/clase.model'

@Component({
        selector: 'event-thumbnail',
        template: `
            <div [routerLink]="['/clases', clase?.id]" class="well hoverwell thumbnail">
                    <h2>{{clase?.name}}</h2>
                    <div>Time: {{clase?.time}}</div>
                    <div [ngSwitch]="clase?.time">
                        <span *ngSwitchCase="'6:40 pm'" [ngClass]="RetrieveClasses()">Inicio tarde</span>
                        <span *ngSwitchCase="'8:40 am'">Inicio temprano</span>
                        <span *ngSwitchDefault>Inicio normal</span>
                    </div>
                    <div>Ubicacion: {{clase?.location?.room}}</div>
                    <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>
            </div>
        `,
        styles: [`
            .green { color: red !important; }
            .bold { font-weight: bold; }
            .well { min-height: 250px; margin: 10px; }
        `]
})

export class ClaseThumbnailComponent
{
    @Input() clase:IClase
    @Output() eventClick = new EventEmitter()

    RetrieveClasses(){
        return {bold: true}
    }
    
    handleClickMe(){
        console.log('click')
    }
}