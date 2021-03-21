  
  
  let ans="0";
  ans= ans.slice( 1 ) ;
  //乱数
  var num1 = Math.floor( Math.random() * 101 ) ;
  var num2 = Math.floor( Math.random() * 101 ) ;
  var sum = num1+num2;
  document.getElementById("aaa").textContent=num1;
  document.getElementById("bbb").textContent="+";
  document.getElementById("ccc").textContent=num2;
  document.getElementById("ddd").textContent="=";
  
  //0を入入力
  document.getElementById("b0b").addEventListener("click",function() {
    ans=ans+0
    document.getElementById("eee").textContent=ans;
    });
 
  //1を入入力
  document.getElementById("b1b").addEventListener("click",function() {
    ans=ans+1
    document.getElementById("eee").textContent=ans;
    });
 
  //2を入入力
  document.getElementById("b2b").addEventListener("click",function() {
    ans=ans+2
    document.getElementById("eee").textContent=ans;
    });
  
  //3を入入力
  document.getElementById("b3b").addEventListener("click",function() {
    ans=ans+3
    document.getElementById("eee").textContent=ans;
    });

  //4を入入力
  document.getElementById("b4b").addEventListener("click",function() {
    ans=ans+4
    document.getElementById("eee").textContent=ans;
    });
     
  //5を入入力
  document.getElementById("b5b").addEventListener("click",function() {
    ans=ans+5
    document.getElementById("eee").textContent=ans;
    });
 
  //6を入入力
  document.getElementById("b6b").addEventListener("click",function() {
    ans=ans+6
    document.getElementById("eee").textContent=ans;
    });

  //7を入入力
  document.getElementById("b7b").addEventListener("click",function() {
    ans=ans+7
    document.getElementById("eee").textContent=ans;
    });

  //8を入入力
  document.getElementById("b8b").addEventListener("click",function() {
    ans=ans+8
    document.getElementById("eee").textContent=ans;
    });
     
  //9を入入力
  document.getElementById("b9b").addEventListener("click",function() {
    ans=ans+9
    document.getElementById("eee").textContent=ans;
    });
     

  //del
  document.getElementById("bdelb").addEventListener("click",function() {
    ans=" "
    document.getElementById("eee").textContent=ans;
    });  

  //OK
  document.getElementById("bokb").addEventListener("click",function() {
    if(sum==ans){
      document.getElementById("fff").textContent="〇";
      num1 = Math.floor( Math.random() * 101 ) ;
      num2 = Math.floor( Math.random() * 101 ) ;
      sum = num1+num2;
      ans="0";
      ans= ans.slice( 1 ) ;
      document.getElementById("aaa").textContent=num1;
      document.getElementById("ccc").textContent=num2;
      document.getElementById("eee").textContent=ans;
    }else{
      document.getElementById("fff").textContent="✕";
    }
    });  
    

     
     
     
 
  
 
  

 




