# Week-09

1. error log 的位置在 /var/log/myweb/error.log
   ![error.log](https://media.discordapp.net/attachments/1291051624285995138/1303979575059025960/2024-11-07_2.44.19.png?ex=6732ff1d&is=6731ad9d&hm=bfa28561a38e873c40508c7aa4e055e021a2e22f6ea843434fc6ded6a6f68e2f&=&width=2206&height=468)
   - 可以觀察到 Permission denied，，在/var/myweb/index.html 當中沒有權限，因此要修改權限`chmod 777 /var/myweb/index.html `
2. 同時查看 nginx.conf，發現多了一個分號，將分號進行刪除，修改以後在 terminal 輸入`sudo systemctl restart nginx`
   ![nginx.config](https://media.discordapp.net/attachments/1291051624285995138/1303979354455412746/2024-11-07_2.51.16.png?ex=6732fee8&is=6731ad68&hm=c9e6c08c9fdbf58398f231e721448d6e204b0401117ebbba1ca47b41efca285c&=&width=1190&height=1092)

3. 之後 nginx 出現錯誤，在 terminal 輸入`systemctl status nginx.service`查看 Nginx 服務狀態和失敗原因，發現 80 port 被 srv 這個 process 佔用，要把它砍掉 ![nginx status](https://media.discordapp.net/attachments/1291051624285995138/1303980675623551017/2024-11-07_2.53.31.png?ex=67330023&is=6731aea3&hm=dce5301a5494833b34368a8028ceebe53cdc74fdb9e92224a27510a7ee06e9bf&=&width=2206&height=720)

4. 砍掉 port 80 後`curl localhost`會出現以下訊息

```bash
curl: (7) Failed to connect to localhost port 80 after 0 ms: Couldn't connect to server
```

5. 後來發現是防火牆的問題，但是 linux 當中的 ufw 不能用，因此使用 iptables
   ![防火牆](https://media.discordapp.net/attachments/1291051624285995138/1303988756927483955/2024-11-07_3.45.40.png?ex=673307aa&is=6731b62a&hm=98a1847ead08b3fa0cc4acdab2a57b0fb54343a867e65a4794bc1837c1043aeb&=&width=2206&height=1022)
