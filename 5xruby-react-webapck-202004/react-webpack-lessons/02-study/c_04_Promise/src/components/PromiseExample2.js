// /*
function delay(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}
function throwError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise error tttt')); // 不成文規定，要加 Error 類別
    }, 1000);
  });
}
function init2() {
  delay('1')
    .then((result) => {
      console.log(result);
      return throwError();
    })
    .then((result) => {
      console.log(result);
      return delay('3');
    })
    .then(() => {
      console.log('complete');
    })
    .catch((error) => {
      console.error(error.message);
    });
}
init2();
// */
