import { Routes } from "@angular/router";
import { PerfilComponent } from './perfil.component';
import { LoginComponent } from './login.component';

export const userRoutes : Routes= [
    { path: 'perfil', component: PerfilComponent },
    { path: 'login', component: LoginComponent }
]