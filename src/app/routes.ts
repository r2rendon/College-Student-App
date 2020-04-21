import { Routes } from "@angular/router";
import { ClasesListaComponent } from './clases/clases-lista.component';
import { ClaseDetailsComponent } from './clases/clase-details/clase-details.component';
import { CreateClaseComponent } from './clases/create-clase.component';
import { ClaseRouteActivator } from './clases/clase-details/clase-route-activator.component';
import { Error404Component } from './errors/404.component';
import { ClaseListaResolver } from './clases/clases-lista-resolver.service';
import { CreateSeccionComponent } from './clases';


export const AppRoutes: Routes = [
    { path: '404', component: Error404Component },
    { path: 'clases/new', component: CreateClaseComponent, canDeactivate: ['canDeactivateCrearClase'] },
    { path: 'clases/seccion/new', component: CreateSeccionComponent },
    { path: 'clases', component: ClasesListaComponent, resolve:  { AllClases: ClaseListaResolver} },
    { path: '',  redirectTo: '/clases', pathMatch: 'full'},
    { path: 'clases/:id', component: ClaseDetailsComponent, canActivate: [ClaseRouteActivator] },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
]