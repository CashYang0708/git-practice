# Week-05

1. 你的網址，應該是 https://www.xxx.xxx，點擊過去應該要可以看到個人作業 4 架設的 Express server （由 Nginx proxy 到 Express）
   https://www.cloudnativecash.me
2. 你在哪裡購買網域的
   namecheap
3. DNS 的 A record 是什麼？
   為填寫主機的 IP 位址;例如說 google.com 對應的 ip 為 172.217.163.46(使用 ping google.com 查詢得到)
4. DNS 的 NS record 是什麼？
   name server，用來指定操作的 DNS 伺服器主機名稱，不可以用 IP 位址表示
5. Domain Name vs FQDN vs URL 這三者分別為何？

   - Domain name: 用來標識網站或服務的地址，便於人們記憶和使用。網域名稱對應著一個 IP 位址，透過 DNS 解析出 ip，其中包含多個部分，用「.」來分隔，結構如下:

     - root domain (TLD): DNS 架構最上層的伺服器(目前)
     - Top level domain: 如果一個 domain name 是 example.com，那.com 就是 TLD(常見的 TLD 還包含 .org, .gov 等等)
     - Second level domain: 如果一個 domain name 是 example.com，那 example 就是 second level
     - Host domain: 如果一個 domain name 是 www.example.com，那www就是host domain

   - FQDN:FQDN 指在 DNS 中的完整的網域名稱，具體指出一台主機的所有層級名稱，從 host domain 到 TLD，一直到 root domain(通常根域名省略表示)，像是www.google.com
   - URL: 完整的網路資源定位，它包含了訪問特定網頁或資源的完整資訊，除了 domain name 之外還包含 protocol(http, https)、路徑以及參數等等;以https://www.example.com/page?id=123為例:
     - protocol: https
     - FQDN: www.example.com
     - 路徑及參數: /page?id=123

6. 為什麼應該要為網站加上憑證？而不是直接用 http 就好？

   - 資料加密:SSL 採用 https，傳輸過程中，傳輸過程中會加密，http 則沒有加密
   - 網站認證與信任: SSL 憑證提供了一層身份驗證，確保訪問者正在與預期的網站進行互動，而不是遭遇釣魚或欺騙網站
   - SEO: 使用 HTTPS 的網站在搜尋引擎結果中可能獲得更高的排名並吸引更多的流量
