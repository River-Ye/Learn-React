/* eslint no-bitwise:0 */
/* eslint-disable */
export const MUGGLE = 0x00000001; // 1
export const AM     = 0x00000002 | MUGGLE; // 3
export const TECH   = 0x00000004 | AM; // 7
export const ADMIN  = 0x10000000 | TECH; // 268435463
export const MYSTERY= 0x00000008;
export const ALL    = ADMIN | TECH | AM | MUGGLE | MYSTERY;
/* eslint-enable */

export function verify(permissionCode:number):boolean {
  return (permissionCode | ALL) === ALL;
}

export function has(userPermissionCode:number, appPermissionCode:number):boolean {
  return (userPermissionCode & appPermissionCode) === appPermissionCode;
}
