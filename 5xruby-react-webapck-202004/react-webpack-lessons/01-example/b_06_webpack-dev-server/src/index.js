import 'css/app.scss';
console.log('-------- app.js ---------');
console.log(process.env.NODE_ENV);
document.getElementById('info').innerHTML = Math.random();

if (process.env.NODE_ENV === 'development') {
  console.log('NODE_ENV development');
} else {
  console.log('NODE_ENV production');
}
