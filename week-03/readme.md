- 什麼是 AWS Region, AZ (availability zones)  
  Ans:AZ 是 Region 的子集，Region 是世界上有多個 AZ 的實體位置。而 AZ 由一或多個分散的資料中心(Data Center)所組成，可以想像成一個獨立的大機房，以 AWS 為例;region 在亞洲有大阪、首爾、東京、台灣、新加坡、雪梨
- 如果你要使用 AWS 服務，你會怎麼選擇用哪個 Region，考慮的因素有哪些？  
  Ans:考慮的因素有大以下幾點
  1. 成本價格:  
     存在不同區域的地方可能會導致價格不同，AWS 的 pricing calculator 可以幫助我們了解同一個 service 在不同 region 中的計價方式
  2. 法律:  
     有些國家對於資料儲存有法律規定，舉例來說;歐盟對於資料隱私有相關的規範(GDPR)，因此若有些機密資料存在歐洲的資料中心可能會違法
  3. Latency:  
     存放在不同 region 會導致延遲時間的不同，理論上離主要使用者越遠的資料中心延遲會越多，因此有些服務若強調低延遲性(如 AWS cloudfront)，價格就不會是唯一考量
  4. Availability:  
     並非所有的 region 都有相同的 Availability
