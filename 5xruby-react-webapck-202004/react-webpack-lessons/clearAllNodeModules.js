// v2.0.0
// npm i -g rimraf
const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

// https://stackoverflow.com/questions/15636367/nodejs-require-a-global-module-package
function requireGlobal(packageName) {
  const globalNodeModules = childProcess.execSync('npm root -g').toString().trim();
  const packageDir = path.join(globalNodeModules, packageName);
  if (!fs.existsSync(packageDir)) {
    packageDir = path.join(globalNodeModules, 'npm/node_modules', packageName); //find package required by old npm
  }
  if (!fs.existsSync(packageDir)) {
    throw new Error('Cannot find global module \'' + packageName + '\'');
  }
  const packageMeta = JSON.parse(fs.readFileSync(path.join(packageDir, 'package.json')).toString());
  const main = path.join(packageDir, packageMeta.main);
  return require(main);
}

const rimraf = requireGlobal('rimraf');
function rimrafPromise(file){
  return new Promise((resolve, reject) => {
    rimraf(file, err => err ? reject(err) : resolve(file));
  });
}
// const rimrafPromiseDebug = file => new Promise((resolve, reject) => setTimeout(()=> resolve(file), 100));
const isDirectory = file => fs.statSync(file).isDirectory();
const generatorTask = dirPath => {
  return Promise.all([
    rimrafPromise(`${dirPath}/dist`),
    rimrafPromise(`${dirPath}/build`),
    rimrafPromise(`${dirPath}/node_modules`)
  ])
};


const generatorPath = (folderName) => {
  return fs.readdirSync(path.resolve(folderName))
    .map((name) => path.join(folderName, name))
    .filter(isDirectory)
};

// https://morning.work/page/maintainable-nodejs/asynchronous-programming.html
function coroutine(genFn) {
  return function () {
    // 函數執行結果是一個 promise 對象
    return new Promise((resolve, reject) => {
      // 首先執行 generator function，它會返回一個 Generator 對象
      const gen = genFn.apply(null, arguments);
      let ret;
      function next(value) {
        // 執行.next()返回 yield 返回的值
        // next()可以接收一個參數，用作在生成器函數裡面 yield 語句的返回值
        ret = gen.next(value);
        // 如果 done=true 則表示結束
        if (ret.done) {
          return resolve(ret.value);
        }
        // 等待 promise 執行結果
        ret.value.then(next).catch(reject);
      }
      // 開始執行
      next();
    });
  };
}

const rimrafNodeModules = coroutine(function* () { 
  var folders = generatorPath(__dirname).reduce((prev, curr) => {
    return prev.concat(generatorPath(curr));
  },[]);
  for (let i = 0; i < folders.length; i++) {
    var folderPath = folders[i];
    console.log(i+'/'+folders.length+' '+folderPath);
    yield generatorTask(folderPath);
  }
});

rimrafNodeModules()
  .then(() => {
    console.log('!!!! Complete 😁 !!!')
  })
  .catch((error) => {
    console.error(error)
  });

