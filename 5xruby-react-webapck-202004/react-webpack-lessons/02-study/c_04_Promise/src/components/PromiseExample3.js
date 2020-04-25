// /*
function delay(name, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, time);
  });
}
function init() {
  Promise.all([ // .all 這三個 API 都完成後，才走下一步
    delay('1', 1000),
    delay('2', 2000),
    delay('3', 1500),
  ])
    .then((results) => {
      console.log(results);
    });

  Promise.race([ // .race 其中一個完成，就走下一步
    delay('1', 1000),
    delay('2', 2000),
    delay('3', 1500),
  ])
    .then((result) => {
      console.log(result);
    });
}

init();
// */
