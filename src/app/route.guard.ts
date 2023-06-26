import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';

export const routeGuard: CanActivateFn = (
  route:ActivatedRouteSnapshot,
  state:RouterStateSnapshot
  ): Observable<boolean> | boolean => {
  const token = localStorage.getItem("token")
  const router = new Router()
  if(token){
    if(route.routeConfig?.path === "login"){
      router.navigate(["/home"]);
      return false
    }
    const tokenContent = jwtDecode(token);
    console.log(tokenContent)
  }else{
    if(route.routeConfig?.path === "login" || route.routeConfig?.path === "home"){
      return true
    }
  }
  console.log(route.routeConfig?.path)
  router.navigate(["/home"]);
  return false;
};
