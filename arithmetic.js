//TODO:
//DONE - operation
//DONE - number sizes
//check answer correctness
//make numbers make sense for given operation
//put largest number on top, same as above
//carrying or not carrying
//move answer line up a bit?

var cop = "+";
var operations = ["add", "sub", "mult", "div"];
for(var i = 0; i < operations.length; i++){
  var opel = document.getElementById(operations[i]);
  opel.onclick = function(){
    console.log(this.value);
    cop = this.value;
    new_problem();
  }
}

var max_in = document.getElementById("max");
var max;
max_in.oninput = function(){
  max = max_in.value;
  new_problem();
}

var ans_in = document.getElementById("answer");
var ans;
ans_in.oninput = function(){
  ans = ans_in.value;
  if(ans == a){
    new_problem();
  }
}

var op_display = document.getElementById("od");
var n1e = document.getElementById("n1");
var n2e = document.getElementById("n2");
var n1, n2, a;

function answer(operation, num1, num2){
  if(operation == "+"){
    return num1+num2;
  }else if(operation == "/"){
    return num1/num2;
  }else if(operation == "-"){
    return num1-num2;
  }else{
    return num1*num2;
  }
}

function new_problem(){
  op_display.textContent = cop;
  //console.log(op_display.getBoundingClientRect().width);
  n1 = Math.floor(Math.random()*max);
  n2 = Math.floor(Math.random()*max);
  a = answer(cop, n1, n2);
  n1e.textContent = n1;
  n2e.textContent = n2;
  console.log(n1, cop, n2, a);
}









