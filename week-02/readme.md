Week 2
===

## 安裝哪個版本？為什麼？
v20.17  
選擇原因：
1. 是LTS版本(Long Term Support) 
2. 通常目前最新的版本(v22.9.0)通常會有一些其他問題因此會使用上一個偶數版本
3. 不使用奇數版本的原因是因為奇數版本通常會有一些實驗性質的功能

## nvm和npm分別是什麼
* npm (Node Package Manager)  
1. 是一個套件管理工具(如同python的pip或poetry)。套件就是一個由非原生且公開的原始碼，像是jQuery, React, Express等都是所謂的套件，為了幫助開發者搜尋和使用，因此就產生了npm。
2. 如何使用npm安裝套件:```npm install [套件名稱]``` ，如果要全域安裝套件(將套件安裝在系統的變數當中)可以下```npm install -g [套件名稱]```
3. npm install過程 (使用 package.json)  
>>(1) 計算缺少的套件  
>>> + 專案內的 node_modules 結構  
>>> + 開發者設定的 package.json
>>> + npm install 後自動生成的 package-lock.json  

>>(2) 從Registry(可以想像成儲存package的地方)當中取得套件資訊
>>> 計算出來缺少套件後，npm向指定的Registry獲取各目標套件的 package.json、可用版本，並解析出下載URL  

>>(3)計算差異
>>>因為套件基本上也是一個專案，因此也可能會用到不同套件。npm在這步驟會去計算各套件的package.json，整理各套件個別需要下載的版本（有可能同套件需要多版本，最後產出整個專案所使用的的套件結構樹(package-lock.json)   

>>(4)下載、提取真正需要的套件
>>>下載套件，並將下載的內容解壓縮，放到node_modules 資料夾中  

>>(5)執行每個套件的 install
>>>檔案全部都寫入到 node_modules 後，npm會執行所有套件的npm install，讓套件本身的dependency被正確的連結到下載的套件上  
* nvm (Node Version Manager)  
管理node.js版本的工具，因為不同的專案可能會用到不同的node.js版本，不同的node.js版本可能也會因此影響到npm