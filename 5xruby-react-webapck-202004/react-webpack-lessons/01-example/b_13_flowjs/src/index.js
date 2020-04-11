import 'css/app.scss';
import { add } from '@/utils';
import { type UserType } from '@/types';
import { fetchData } from '@/services/api';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  require('!!raw-loader!../src/html/index.pug');
}
// TODO
console.log(add(1, 1));

console.log(add('a', 'b'));


const name: string = 'milkmidi';
console.log(name);

const nub: number = 1;
console.log(nub);

const arr: string[] = ['1', '2', '3'];
console.log(arr);


type MyObject = {
  name: string;
  age: number;
}
function foo(data:MyObject) {
  console.log(data.age);
}


const button:HTMLButtonElement = document.querySelector('.btn');
button.addEventListener('click', () => {
  fetchData().then((results:UserType[]) => {
    const [firstUser] = results;
    // firstUser.
  });
});
