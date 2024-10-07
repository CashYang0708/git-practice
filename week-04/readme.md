## Week-04

1. 提供 instance 的 public IP  
   18.181.251.18
2. 什麼是 instance type?  
   由不同的記憶體、CPU、儲存空間以及網路容量排列組合而成，命名規則主要由 instance 的系列、第幾代、處理器系列、功能和大小
3. 什麼是 Nginx？有哪些用途與特性？
   除了當作一般的 web server 之外，還可以當作反向代理、HTTP cache、load balancer，可以當作 apache 的強化版，nginx 跟 pache 比對於高流量的處理更為快速。
   - HTTP:作為靜態內容（如 HTML、CSS、JavaScript、圖片等）的網頁伺服器，並處理 HTTP request
   - Load balancer:流量分配給多台後端伺服器，使用 round-robin、least-connected
   - reverse proxy:在 client 和 origin server 中間，由 reverse proxy server 代替 origin server，回應 client 的 request
4. pm2 套件是什麼？有什麼用處？(如果不是使用 pm2，那就告訴我你是用哪一個、這個工具的用途，以及，你為什麼這樣選擇)
   - pm 為 process manager 的意思，pm2 可以讓開發者在伺服器上運行、監控、管理和維護 Node.js 的 application，除此之外，使用 pm2 可以讓 node.js 的 project 在背景當中一直持續執行(除非你把它關掉)。
   - 用處:
     - node.js 應用程式管理:PM2 可以啟動和管理多個 node.js 的應用程式，並監控它們的運行狀態。如果應用程式有問題，會自動重啟 process 來確保服務的高可用性。
     - Process 監控:可以檢查 process 目前的狀態(status)、cpu 使用狀況以及查看 log
     - cluster:pm2 有自動化的 load balancer 可以分享每個 process 的 HTTP/TCP/UDP 連線
     - 零停機重啟:在更新應用程式時，pm2 可以在不中斷服務的情況下進行重啟。這對於需要高可用性和零停機時間的應用程式而言特別重要。
5. 步驟 9 中提到的 proxy 是什麼意思？為什麼要透過 Nginx 來 proxy 到 Express 開發的 Web Server?(提示 Reverse proxy vs Forward Proxy)

   - load balance:如果有多個 Express 在運行，Nginx 可以作為 load balancer 來分配來自 client 端的請求，將它們轉發到不同的 Express，從而提高擴展性和可用性。
   - 安全性:reverse proxy，可以隱藏 Express 實際運作的細節，保護其免受外部攻擊。client 只會與 Nginx 溝通，Nginx 將內部的 Express 隱藏來減少攻擊面。

6. 提供步驟 9 的 Nginx 設定檔  
   設定的檔案在/etc/nginx/sites-available/default

```
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        index index.html index.htm index.nginx-debian.html;

        server_name _;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
                proxy_pass http://127.0.0.1:3000;
                proxy_set_header Host $host;
        }
    }
```

7. Security Group 是什麼？用途為何？有什麼設定原則嗎？

   - Security Group 是什麼？  
     可以想像成虛擬防火牆，主要用來控制進出特定虛擬機或服務的網路流量
   - 用途為何？
     - 流量控制:透過設定 inbound rule 來限制特定的 portocol(如 HTTP,TCP 等等)的 port(80, 443)才能使用
     - 隔離:在多個虛擬機之間進行網路隔離，避免內部系統被外部惡意攻擊。
   - 設定原則:
     - 盡量避免擋掉常用的 port(80, 443)或 ip 等等
     - 以最小的權限為原則，避免系統暴露在不必要的風險上面

8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？
   - 什麼是 sudo?  
     sudo 是 super user 的縮寫，代表這個指令的執行身份是 super user，spuer user 就是電腦的系統管理員，擁有最高權限。
   - 為什麼有的時候需要加上 sudo，有時候不用？
     - 需要加上 sudo:關於系統性的設定;例如網路、套件更新以及安裝、更改密碼等等
     - 不需要加上 sudo:普通檔案編輯、移動
9. Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？

   - Log 檔案在哪?  
     access log(用來記錄 response code, request, ip 等等)，預設路徑為`/var/log/nginx/access.log`，error log(用來 server error, configuration 等等)的預設路徑為`/var/log/nginx/error.log`
   - 怎麼看到的?  
     無論是`/var/log/nginx/access.log`還是`/var/log/nginx/error.log`，紀錄兩者的地方都是 nginx 的 configuration file`/etc/nginx/nginx.conf`
   - 怎麼看 Nginx 的 Log？
     access log 的部分主要會是跟 http request 和 response 有關的資訊，默認格式如下(也可以自行定義)

     ```bash
     log_format combined '$remote_addr - $remote_user [$time_local] '
                    '"$request" $status $body_bytes_sent '
                    '"$http_referer" "$http_user_agent"';
     ```

     因此可以使用 grep 搭配正規表示法篩選出我們想要的內容;以下為範例指令

     ```bash
     sudo grep "192.168.1.10" /var/log/nginx/access.log #在log中查詢有ip是192.168.1.10
     ```

     error 則有分成不同 level,level 可以是 debug, info, notice, warn, error, crit, alert,emerg 中的任意值。按緊急程度從低到高排列

10. 其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」

    - 遇到的問題:
      原本一開始在測試 pm2 時用 pm2 start app.js 來執行，後來又在還尚未關閉 pm2 的時候使用 node app.js 來執行遇到 port 已經被佔用
    - 解決方案:

      ```bash
      lsof -i:[被佔用的port] #查看哪個process使用此port
      ```

      ```bash
      kill $(lsof -t -i:[被佔用的port]) #刪除任何使用這個port的process
      kill -9 [被佔用的port] #強制刪除使用這個port的process
      ```

11. 列出完成本作業時參考的資料
    - https://github.com/saasscaleup/nodejs-ssl-server
    - https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DyhiuV6cqkNs&ved=2ahUKEwjjh-ea6vGIAxVJhq8BHQjvBC8QwqsBegQICxAF&usg=AOvVaw3vcaTqvytJARd3qum6tdMi
    - https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://aws.amazon.com/tw/ec2/instance-types/&ved=2ahUKEwj85uvi6vGIAxWTh68BHRSCBHQQFnoECBoQAQ&usg=AOvVaw2xrQSPC3lBls5oLCrxE_cF
    - https://yhtechnote.com/linux-sudo/
    - https://medium.com/starbugs/web-server-nginx-2-bc41c6268646
    - https://tw.alphacamp.co/blog/nginx
    - https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/
    - https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html
    - https://docs.nginx.com/nginx/admin-guide/monitoring/logging/
    - https://www.readfog.com/a/1644005463855042560
