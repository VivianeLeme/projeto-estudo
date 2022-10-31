import { AutenticationService } from './autentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{



  constructor(private router:Router, private AutenticationService: AutenticationService,) { }

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    // const token = window.localStorage.getItem('item');
    const token = "vivianevieiranfoan";

    if(token){
      this.router.navigate(['home']);

      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }


  }
}
