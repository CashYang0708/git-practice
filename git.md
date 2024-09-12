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

會紀錄檔名，也就是新增的檔案

* commit

  每次commit後會產生的一個物件，紀錄每個commit的資訊，包含ree, author, commiter, commit message

* branch

  可以解決版本衝突問題，同時可以在一個分支裡面開發特定功能

* head

  可以視為指標，指向當前的分支

# 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼

一般來說，最主要的變化會是在.git directory裡面的log資料夾還有objects資料夾，log資料夾裡面會有commit的歷史記錄，objects則會紀錄相關檔案的變化


# Commit message 應該怎麼寫比較好？應該有什麼 style 嗎？

我認為commit message基本上就是寫你這次commit所做的事情，以我的個人經驗來說，通常一個commit來說，我不會新增超過三個檔案，這樣之後有問題的話trace back會比較方便一點。至於style方面，如果能夠有issue的編號當作參考會更方便了解這個commit在做的事情