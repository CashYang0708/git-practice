# 說明 blob, tree, commit, branch, head 分別是什麼

* blob

   Binary large object, 每次 git add的時候，會產生出一個blob物件，這個物件會紀錄檔案內容，但不會紀錄檔名。以下為實驗時需要的指令

        git cat-file -t <sha-1 value>  #顯示該sha1 value是屬於那一種物件

        git cat-file -p <sha-1 value>  #顯示該sha1 value物件的內容

   *sha-1 value不需要輸入到很完整git就可以直接辨識，以此repo為例

    
        git cat-file -t c973
        >>> blob

        git cat-file -p c973
        >>> # 9/12 課後心得
        今天雖然沒有講解到太多技術的部分，著重在課程介紹的部分，但不會流於俗套，而且說了一些過去的經驗，讓我了解到關於軟體開發上面比較偏向「心態」方面的東西，雖然說這些東西很難以量化，但我覺得自己還是得到了不少。
        # 對這門課的期待

        希望對於原本就會的東西能有更深刻的印象，也希望老師講課能帶來更多應用面的東西，因為大學上的有些課程比較著重在於理論面，應用方面比較缺乏% 


* tree

會紀錄檔名，也就是新增的檔案，同樣以此repo為例

     git cat-file -t 365a
     >>> tree 

     git cat-file -p 365a
     >>> 100644 blob c973c052390993246eb6898054f50d8e37687b71    readme.md

* commit

  每次commit後會產生的一個物件，紀錄每個commit的資訊，包含ree, author, commiter, commit message

* branch

  可以解決版本衝突問題，同時可以在一個分支裡面開發特定功能

* head

  可以視為指標，指向當前的分支

# 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼

.git檔案夾有包含以下檔案或檔案夾

1. objects/
* 有包含blob, tree, commit，這些東西都會有一個sha-1的hash value當作唯一的識別
* 執行 git add時，變更的檔案會儲存在objects
* 執行 git commit時，git會將commit message、檔案等東西存入objects
2. refs/
* 儲存分支(branch)和標籤(tag)指向。refs/heads/中的檔案對應指向分支最新提交commit的hash value。
* refs/tags紀錄該tag對應的commit
3. HEAD
* 指向目前分支，當切換分支時，HEAD會更新並指向新的分支或commit
4. index
* 會儲存staging are的東西(類似快取)
* 會紀錄要被staged以及準備要commit的檔案
5. logs/
* 紀錄所有分支的變更紀錄，在logs/refs/heads/當中會紀錄每個分支的歷史資訊，當 commit, merge或reset的時候也會紀錄
6. config
* git相關設定，像是使用者資訊
7. packed-refs
* 當repo有太多branch或tag時，用packed-refs可以提升效率
8. description
* 給Gitweb來描述這個repo
9. hooks
* 客製化條件觸發腳本的規則，hooks script是用來跑一些簡單的CI任務(如pre-commit)
10. info/
* 裡面有exclude的檔案的檔案追蹤不需要被加入到git的檔案

# Commit message 應該怎麼寫比較好？應該有什麼 style 嗎？

我認為commit message基本上就是寫你這次commit所做的事情，以我的個人經驗來說，通常一個commit message不會新增超過三個檔案，這樣之後有問題的話trace back會比較方便一點。但如果這次的 commit (不超過三個檔案) 是會讓團隊夥伴 pull 下來後，系統是壞掉的該如何處理？我的方法會是額外開個feature branch去進行修改。至於style方面，如果能夠有issue的編號當作參考會更方便了解這個commit在做的事情

同時，根據Angular Git commit message guidelines，撰寫commit message最好要有以下的東西

1. Type:代表commit類別，有包含feat, fix, docs, style, refactor, test, chore
2. Subject:不應超過50個字元，若用英文書寫則需大寫開頭，中英文都不用句號結尾。
3. Body:只要是說明改了什麼東西以及更改的目的。最多72個字，過多文字的話自行斷行，否則terminal或github顯示的時候會難以閱讀
4. Footer:非必要，但通常，但通常是拿來標註issue的編號