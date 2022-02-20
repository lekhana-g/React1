var v1= {};
Object.defineProperty(v1, "iv", {
    get : function (){
      return value;
    },
    set : function (iv){
      document.getElementById("a").value=iv;
      value=iv;
    },   
});
function f1(event)
{
    v1.iv=event.target.value;
    document.getElementById("hf").innerHTML =v1.iv;
}   
setInterval(function(){      
    v1.iv= Math.floor((Math.random() * 100) + 1);
    document.getElementById("hf").innerHTML =v1.iv;    
    }, 10000);