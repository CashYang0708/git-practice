- package.json 中的 dependencies 與 devDependencies 分別是什麼

  - dependencies:在正式環境中需要的套件
  - devDependencies:只有在開發或測試需要的套件

- package.json 中的 scripts 這個區塊怎麼用？
  可以自定義指令，節省打指令的時間，若要執行指令的話只要在終端機輸入`npm run <custom_script_name>`or`npm run-script <custom_script_name>`就可以執行，npm 會讀取 scrips 中 json 的 keyName;以此專案為例;假設我的 package.json 中的 scripts 如下

```json
  "scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "start":"node app.js"
 }
```

只要在終端機輸入 `npm run start`就等同於輸入`node app.js`

- Port number 要怎麼以環境變數來設定？  
   以此題來說 在 terminal 輸入`PORT=3000 node app.js`，然後原本 app.js 的 port 程式碼改成

  ```javascript
  const port = process.env.PORT || 3000;
  ```

- 關於哪些檔案應該要被放上 github repo 這個問題，描述看看為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？

  - 要被上傳:packgae.json, package-lock.json，package.json 是整個 node.js project 的核心配置檔案，因此一定要上傳, package-lock.json 雖然可以透過 npm install 產生，但可能會裝到最新的版本號，如果要統一版本的話還是需要 package-lock.json
  - 不用上傳:node_modules, node_modules 只是紀錄所以透過 npm install 所產生的 dependencies，這個檔案非常大而且可以透過 npm install 去讀取 package.json 來重新產生

- 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用？  
  兩者是 js 模組化開發的兩種不同系統

  - CJS:最初是為了 node.js 而設計。import 以及 export module 的方式是分別透過 require 以及 exports 或 module.exports，以下為範例程式

  ```javascript
  module.exports = function () {
    console.log("Hello from CommonJS");
  };

  const myModule = require("./myModule");
  myModule();
  ```

  - ESM:最初只能在瀏覽器中使用，用 import 跟 export 來進行模組化開發

  ```javascript
  export function myFunction() {
    console.log("Hello from ESM");
  }

  import { myFunction } from "./myModule.js";
  myFunction();
  ```

## 進階題:

- localhost 是什麼？  
  Ans:是指當前電腦發出請求所使用的主機名稱
- `curl` 是什麼？查查看怎麼用 curl 來測試網路連線？常用參數有哪些？  
  Ans:linux 指令當中透過 HTTP Protocol 對於指定 URL 進行網路傳輸，以下為 curl 常見參數

  ```
  curl [options] [URL...]
  -A 指定 User-Agent
  -o 代表下載檔案並重新命名
  curl -o [the file you rename] [fileURL]
  -X 指定請求方式
  curl -x [HTTP method] [URL]
  -v 輸出完整訊息
  curl -v [URL]
  ```
