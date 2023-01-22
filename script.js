
// let hud1= document.querySelector("#top") ;
let hud1=document.getElementById("top");
console.log(hud1);
const buttons = document.querySelectorAll("button");
let value =0;
// hud1.textContent=value;
let hud2=document.getElementById("bot");
let calculated=false;
let Start0=false;
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      
      if(hud1.textContent==0&&button.classList.toString()!="operation"&&button.classList.toString()!="clear"&&button.classList.toString()!="delete"){

        console.log(value);
        console.log("first if");
        value=button.textContent;
        console.log(value);
        hud1.textContent=value;
        // console.log("there was a click");
      }
      else if(button.classList.toString()=="clear"){
        console.log("this is clear");
        hud1.textContent="";
        hud2.textContent="";
        Start0=false;
        calculated=false;
      }
      else if(button.classList.toString()=="delete"){
        console.log("this is clear");
        let NotDeleted=hud1.textContent;
        NotDeleted=NotDeleted.slice(0,-1);
        hud1.textContent=NotDeleted;
        Start0=false;
      }
      else if(button.classList.toString()=="operation"&& value!="x"&&value!="+"&&value!="-"&&value!="%"){
        console.log("this is me");
        value=button.textContent;
        hud1.textContent+=value;
        Start0=false;
      }
      else if (button.classList.toString()=="numbers")
        {
          
        if(button.textContent==0&&(value=="x"||value=="+"||value=="-"||value=="%")){
          if(hud1.textContent.charAt(hud1.textContent.length - 1)==0){

          }
          else{
            console.log("gos");
            // value=button.textContent;
            hud1.textContent+=0;
            Start0=true;
            value=0;
          }
        }
             else{
              if(calculated){
                calculated=false;
                hud1.textContent="";

              }
              if(!Start0){
                    value=button.textContent;
                    hud1.textContent+=value;
                    console.log("i put value 0 in hud1");
              }
                 }
    //   console.log("there was a click");
      }
      if(button.classList.toString()=="result"){  //work here stuf to do 
        console.log("help")
      let arr=hud1.textContent
      arr=arr.match(/[+\-x/]|[^+\-x/]+/g)
      let num = arr.filter(i=>!isNaN(i));
      let  operators = arr.filter(i=> /[+\-x/]/.test(i));
      num=num.map(n => parseInt(n));
      let operatorIndex = operators.findIndex(operator => operator === "x");
      console.log(operatorIndex);
      while(operatorIndex!=-1){
         num[operatorIndex]=num[operatorIndex]*num[operatorIndex+1];
         num.splice(operatorIndex+1, 1);
         operators.splice(operatorIndex, 1);
         operatorIndex = operators.findIndex(operator => operator === "x");
         console.log("helpstep x")
      }
       operatorIndex = operators.findIndex(operator => operator === "/");
       console.log("bruh");
       console.log(operatorIndex);
       console.log(operators);
       while(operatorIndex!=-1){
         num[operatorIndex]=num[operatorIndex]/num[operatorIndex+1];
         num.splice(operatorIndex+1, 1);
         operators.splice(operatorIndex, 1);
         operatorIndex = operators.findIndex(operator => operator === "/");
         console.log("division is /")
                            }
       operatorIndex = operators.findIndex(operator => operator === "+");
       while(operatorIndex!=-1){
         num[operatorIndex]=num[operatorIndex]+num[operatorIndex+1];
         num.splice(operatorIndex+1, 1);
         operators.splice(operatorIndex, 1);
         operatorIndex = operators.findIndex(operator => operator === "+");
         console.log("helpstep +")
                           }
       operatorIndex = operators.findIndex(operator => operator === "-");
       while(operatorIndex!=-1){
         num[operatorIndex]=num[operatorIndex]-num[operatorIndex+1];
         num.splice(operatorIndex+1, 1);
         operators.splice(operatorIndex, 1);
         operatorIndex = operators.findIndex(operator => operator === "-");
         console.log("division is -")
                           }
       hud2.textContent=num[0];
       calculated=true;
      //  hud1.textContent=0;

      }
    
    });

  });
  let i=0;
  let lastKeyPressTime = 0;
  document.addEventListener("keyup", function(event) {
    
    // console.log("cring4")
    if(event.key === 'a'){
      //code to execute when 'a' key is pressed
      
      console.log("hard work and happines")
      hud1.textContent=5;
    }
    if(event.key === '*'||event.key === 'x'){
      //code to execute when 'a' key is pressed
      let keybot= document.getElementById("x");
      keybot.click();
      console.log("*")
    }
    if(event.key === '/'){
      let keybot= document.getElementById("/");
      keybot.click();
      console.log("/")
    }
    if(event.key === '+'){
      let keybot= document.getElementById("+");
      keybot.click();
      console.log("+")
    }
    if(event.key === '-'){
      let keybot= document.getElementById("-");
      keybot.click();
      console.log("-")
    }
    if(event.key === '='){
      let keybot= document.getElementById("=");
      keybot.click();
      console.log("=")
    }
    if(event.key === 'Delete'){
      let keybot= document.getElementById("e");
      keybot.click();
      console.log("e")
    }
    
     if(event.key === "1"||event.key === "2"||event.key === "3"||event.key === "4"||event.key === "5"||event.key === "6"||event.key === "7"||event.key === "8"||event.key === "9"||event.key === "0"){
      //code to execute when '1' key is pressed
      if(event.repeat) return 
      i++;
      let keybot= document.getElementById(event.code.charAt(event.code.length - 1));
      lastKeyPressTime = Date.now();
       keybot.click();
      console.log( i)
    }
  
  // console.log((Date.now() - lastKeyPressTime ))
  });