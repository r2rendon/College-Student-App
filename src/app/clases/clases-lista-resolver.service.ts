import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ClaseService } from './shared/clase.service';
import { map } from 'rxjs/operators'

@Injectable()
export class ClaseListaResolver implements Resolve<any>
{
    constructor(private clasesService: ClaseService) {
        
    }

    resolve() {
        //return this.clasesService.getClases().pipe(map(AllClases => AllClases))
        return this.clasesService.getClases()
    }

}