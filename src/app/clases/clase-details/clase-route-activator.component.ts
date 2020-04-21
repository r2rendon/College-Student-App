import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ClaseService } from '../shared/clase.service';

@Injectable()
export class ClaseRouteActivator implements CanActivate
{
    constructor(private claseService: ClaseService, private router: Router) {
        
    }

    canActivate(route: ActivatedRouteSnapshot)
    {
        let claseExist = !!this.claseService.getClasesbyid(+route.params['id'])

        if(!claseExist)
            this.router.navigate(['/404'])

        return claseExist;
    }
}