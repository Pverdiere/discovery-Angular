import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { Token } from './interface';

export const routeGuard: CanActivateFn = (
  route:ActivatedRouteSnapshot,
  state:RouterStateSnapshot
  ): Observable<boolean> | boolean => {
  const token = localStorage.getItem("token");
  const router = new Router();
  const routesRole2 = [
    "lesson/:id",
    "module/:id",
    "profil/:id",
    "training/:id",
    "trainings",
    "users"
  ];
  const routesRole1 = [
    "permissions",
    "roles"
  ]

  if(token){
    if(route.routeConfig?.path === "login" || route.routeConfig?.path === "signup"){
      router.navigate(["/home"]);
      return false
    }
    const tokenContent: Token = jwtDecode(token);
    if(tokenContent.exp < Math.floor(Date.now()/1000)){
      localStorage.removeItem("token")
      router.navigate(["/home"]);
      return false;
    }
    if(route.routeConfig?.path){
      if(tokenContent.role === 2 && routesRole2.includes(route.routeConfig.path)) return true
      if(tokenContent.role === 1 && (routesRole2.includes(route.routeConfig.path) || routesRole1.includes(route.routeConfig.path))) return true
    }
  }else{
    if(route.routeConfig?.path === "login" || route.routeConfig?.path === "home" || route.routeConfig?.path === "signup"){
      return true;
    }
  }
  router.navigate(["/home"]);
  return false;
};
