import React from 'react';
import { useSelector } from 'react-redux';
import PermissionContainer from '@/containers/PermissionContainer';
import './Videos.css';
import * as permission from '@/utils/permission';


export default function Videos() {
  const user = useSelector(state => state.user);
  return (
    <div className="videos-root">
      <h1>{user.name}您好</h1>
      <h2>permission:{user.permission}</h2>
      <PermissionContainer appPermissionCode={permission.MUGGLE}>
        <h3>麻瓜看的到</h3>
      </PermissionContainer>
      <PermissionContainer appPermissionCode={permission.AM}>
        <h3>AM看的到</h3>
      </PermissionContainer>
      <PermissionContainer appPermissionCode={permission.ADMIN}>
        <h3>ADMIN看的到</h3>
      </PermissionContainer>
      <PermissionContainer appPermissionCode={permission.MYSTERY}>
        <h3>這裡只有神密人事看的到，其他人通通不可以啦</h3>
      </PermissionContainer>
    </div>
  );
}
