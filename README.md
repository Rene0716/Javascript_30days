# Day 1: drum Kit
###### tags: `JavaScript_30 days`
### 原先作法:
:arrow_right: 網頁load後,抓畫面上所有div,再顯示KEYCODE
:negative_squared_cross_mark: 無法同時做到按按鍵時撥聲音+改變按鍵UI

---
## :pencil2: 思路:
![](https://i.imgur.com/KjvXaOD.png)

### :fire: 1. **==按按鍵==(KEYDOWN/KEYUP)做兩件事**
* 撥音樂 :arrow_right: AUDIO
    * 撥音樂的動作: 
     ```
         audio.play()
     ```
     #### :question: 按別的按紐時出現error?
     ```
     if(有audio)撥音樂
     ```
     
    * 可以一直重複撥放音效: **==currentTime=0==**
    
* 改變按的按鍵UI樣式 :arrow_right: ADD CLASS
    #### :question: 按完之後按鈕無法回到原先樣式?
        接到2
    
### :question: 如何選到畫面跟音檔一樣的keycode?
    動態選擇與靜態選擇的差別:
    動態: getElement(跟著畫面數量一直變)
    靜態: querySelector(只要沒有再重新取,就維持原本的內容)
    
#### :notebook: querySelectorAll回傳的不是陣列是==NodeList==
1. 有length
2. 有foreach可用
3. 不能用map(不是真正的陣列)

    :star: :star: :star:
    
    ==這邊採用querySelectorAll而不用一個真正的陣列(ex.array.from())是因為
    querySelectorAll回傳的nodeList有forEach可用而不必用到真正的陣列來操作==
---
### :fire: 2. **==按完按鍵==(TRANNSITIONEND)後....**
* 按鍵恢復本來的UI樣式 :arrow_right: REMOVE CLASS 
    ### :warning: transitionend事件:
    * 如果transition 變化的屬性不只一個(如opacity,animation...)，事件會依照屬性個數發出多個(重複觸發)~
    * :arrow_right:所以這邊要先註明:
        * 如果按鍵的屬性是transform :train:按鍵恢復本來的UI樣式
        * **==用屬性管理是為了避免重複事件觸發的程式==**

---
## :star:  小技巧:

### 1. 第一個觀念-->先關門:用IIFE把自己程式包好避免汙染別人/被別人汙染
```
    (function(){
        要打的程式碼
    })()
```
### 2.完成後整理程式碼放的位置
### 3.比起使用e.target, 更推薦用e.currentTarget
:warning: 使用e.target搭配click事件, 如果event比較深:arrow_right: target可能有不同變化
### 4.解題流程:
- [ ] 先看作者示範&他的code
- [ ] 劃出解題架構
- [ ] 看alex影片
- [ ] 自己解題不要看任何解答
---
## :pencil: 補充:

### 1.```<kbd></kbd>```tag
1. keyboard input element
2. inline
3. 用來做input按鍵顯示
### 2.此題目不適合用toggle做
    toggle: 
    你開-->我就關
    你關-->我就開
    


