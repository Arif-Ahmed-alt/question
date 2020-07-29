var button=document.querySelectorAll(".btn");
var questions=document.querySelectorAll(".question")


// button.forEach(function(btns){
//   btns.addEventListener("click",function(e){
//     var addClass=e.currentTarget.parentElement.parentElement;
//     addClass.classList.toggle("showtext")
//   })
// })

questions.forEach(function(q){
  
 var btns=q.querySelector(".btn");
 
 btns.addEventListener("click",function(){
   
  questions.forEach(function(item){
    if(item!=q){
      item.classList.remove("showtext")
    }
  })
  
  q.classList.toggle("showtext")
 })

})
