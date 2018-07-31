import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// ({
//   providedIn: 'root'
// })
export interface CanComponentDeactivate{
  confirm():boolean;
}

@Injectable()
export class LeaveFormGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component:CanComponentDeactivate,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
