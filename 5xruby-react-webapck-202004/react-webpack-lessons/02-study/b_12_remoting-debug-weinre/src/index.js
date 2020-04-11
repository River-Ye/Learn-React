import 'css/app.scss';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  require('!!raw-loader!../src/html/index.pug');
}

$(() => {
  console.log('hi jQuery Ready');
});
