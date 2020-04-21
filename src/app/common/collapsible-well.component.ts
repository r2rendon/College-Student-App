import { Component, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
        <div (click)="toggleContent()" class="well">
            <h4>{{title}}</h4>
            <ng-content *ngIf="visible"></ng-content>
        </div>
    `,
    styles: [`
        .well { padding: 10px; margin: 10px; background-color: #778596; color: white;}
    `]
})

export class CollapsibleWellComponent
{
    @Input() title: string
    visible: boolean = true;

    toggleContent(){
        this.visible = !this.visible;
    }
}