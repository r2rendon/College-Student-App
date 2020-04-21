import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { 
  ClasesListaComponent,
  ClaseThumbnailComponent,
  ClaseDetailsComponent,
  ClaseService,
  CreateClaseComponent,
  ClaseRouteActivator,
  ClaseListaResolver,
  CreateSeccionComponent,
  SeccionListComponent
} from './clases/index'


import { ClasesAppComponent } from './clases-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service'
import { AppRoutes } from "./routes";;
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { JQ_TOKEN } from './common/jQuery.service';
import { UXModalComponent } from './common/ux-modal.component';
import { ModalTiggerDirective } from './common/modal-trigger.directive';

let toastr:Toastr = window['toastr'];
let jQuery:any = window['$'];

@NgModule({
  declarations: [
    ClasesAppComponent,
    ClasesListaComponent,
    ClaseThumbnailComponent,
    NavBarComponent,
    ClaseDetailsComponent,
    CreateClaseComponent,
    Error404Component,
    CreateSeccionComponent,
    SeccionListComponent,
    CollapsibleWellComponent,
    UXModalComponent,
    ModalTiggerDirective
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ClaseService,
    { provide: TOASTR_TOKEN, useValue: toastr},
    { provide: JQ_TOKEN, useValue: jQuery},
    ClaseRouteActivator,
    ClaseListaResolver,
    { provide: 'canDeactivateCrearClase', useValue: CheckFormStatus},
    AuthService
  ],
  bootstrap: [ClasesAppComponent]
})
export class AppModule { }

export function CheckFormStatus(component:CreateClaseComponent)
{
  if(component.isFormDirty)
    return window.confirm('Esta seguro que desea avandonar la pantalla sin guardar los cambios antes?')
  else
    return true;
}