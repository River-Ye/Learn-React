import React from 'react';
import { useSelector } from 'react-redux';
import { verify, has } from '@/utils/permission';

interface Props {
  appPermissionCode: number
}
export default function PermissionContainer({ appPermissionCode, children }:Props) {
  const userPermissionCode:number = useSelector(state => state.user.permission);
  const isVerifyPermission:boolean = verify(userPermissionCode);
  if (!isVerifyPermission) {
    return <div>無效的權限參數</div>;
  }
  const isHasPermission:boolean = has(userPermissionCode, appPermissionCode);
  if (!isHasPermission) {
    return null;
  }
  return (
    <>
      {children}
    </>
  );
}
