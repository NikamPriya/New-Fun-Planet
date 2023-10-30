import { CanActivateFn } from '@angular/router';

export const deaactivateGuard: CanActivateFn = (route, state) => {
  return true;
};
