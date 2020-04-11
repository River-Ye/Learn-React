export const MUGGLE = 1;
export const AM = 2;
export const TECH = 3;
export const ADMIN = 4;
export const ALL = 10;
export const MYSTERY = 9527;

export function verify(permissionCode:number):boolean {
  const permissions:number[] = [MUGGLE, AM, TECH, ADMIN, MYSTERY];
  for (let i = 0; i < permissions.length; i += 1) {
    if (permissionCode === permissions[i]) {
      return true;
    }
  }
  return false;
}

export function has(userPermissionCode:number, appPermissionCode:number):boolean {
  return userPermissionCode >= appPermissionCode;
}
