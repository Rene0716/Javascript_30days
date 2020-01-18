  // 第一個觀念-->先關門:用IIFE把自己程式包好避免汙染別人/被別人汙染


  (function(){
      function playHandler(e){
        console.log(e)

        //play music
        const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
        if(audio) 
        audio.currentTime=0;  //重複撥-連續觸發
        audio.play()
        
        //dom style
        const dom=document.querySelector(`div[data-key="${e.keyCode}"]`)
        if(dom) dom.classList.add('playing');
        console.log(audio,dom)
      }

      //所有按到的kbd,按完之後要回復原本的UI設計不可以保持完放大+黃色邊(transition完後REMOVE playing這個class)
      document.querySelectorAll('.key').forEach(function(key){
          key.addEventListener('transitionend',transitionHandler)
      })

      function transitionHandler(e){
        console.log(e.currentTarget)
        //如果transition 變化的屬性不只一個，事件會依照屬性個數發出多個~用屬性管理是為了避免重複事件觸發的程式
        if(e.propertyName==='box-shadow'){
          e.currentTarget.classList.remove('playing');
        }
      }
      window.addEventListener('keydown',playHandler)
  })()
