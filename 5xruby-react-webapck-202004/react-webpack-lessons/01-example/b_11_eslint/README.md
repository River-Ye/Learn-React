# eslint 
格式化你的 js 風格

- install vscode eslint extensions https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- `npm install -g eslint`
- `eslint --init`
- 參考文章：https://wcc723.github.io/tool/2017/11/09/coding-style/
- 加裝 eslint-import-resolver-webpack，讓 eslint 支援 webpack alias 
- jsconfig.json, 和程式碼無關，只是讓 vscode 能夠認得 @ 自定 alias 
- .eslintignore 可以指定資料夾或檔案，不要做 eslint 檢查


## install package Command line
``` bash
npm install
```

## Development Command line
``` bash
# build for developemnt
npm run start
```

## Production Command line
``` bash
# build for production with minification
npm run build
```
