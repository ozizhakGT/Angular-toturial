import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from "@angular/router";
import { Observable } from 'rxjs/Observable'
import {Injectable} from "@angular/core";
import { AuthService } from './auth.service'

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate, CanActivateChild {

      constructor(private autoService: AuthService, private router: Router) {}

      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.autoService.isAutheticate()
        .then(
          (authenticated: boolean) => {
              if (authenticated) {
                return true
              } else {
                this.router.navigate(['/']);
                return false
              }
          }
        )
      }
      canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(childRoute,state)
      }
}
