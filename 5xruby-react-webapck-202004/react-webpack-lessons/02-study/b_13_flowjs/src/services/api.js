import { type UserType } from '@/types';

// TODO
export function fetchData():Promise<UserType[]> {
  return fetch('/api/data')
    .then((response:Response) => response.json());
}
