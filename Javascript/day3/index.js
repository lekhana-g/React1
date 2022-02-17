let v;
function f1(){
    v=document.getElementById("a").value;
    document.getElementById("hf").innerText="Value of Variable:- "+v;
    console.log(v);
}
var x = setInterval(f2, 10000)
function f2() {
    v=Math.floor(Math.random()*(200 - 1) + 1);
    document.getElementById("a").value = v;
    document.getElementById("hf").innerText = "Value of Variable is: " + v;
    console.log(v);
}