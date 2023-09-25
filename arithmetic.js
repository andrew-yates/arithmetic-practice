//TODO:
//DONE - operation
//DONE - number sizes
//DONE - check answer correctness
//DONE - make numbers make sense for given operation
//DONE - put largest number on top, same as above
//carrying or not carrying
//move answer line up a bit?
//make division problems more random
//DONE - percentages

var cop = "+";
var operations = ["add", "sub", "mult", "div", "percentage"];
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
  max = parseInt(max_in.value)+1;
  new_problem();
}

var ans_in = document.getElementById("answer");
var ans;
var rtime = document.getElementById("rtime");
var count = document.getElementById("count");
ans_in.oninput = function(){
  ans = ans_in.value;
  console.log(ans, a);
  if(ans == a || Math.abs(ans - a) < ans * .05){
    ans_in.value = '';
    times.push(Date.now() - time_start);
    rtime.textContent = Math.floor((Date.now() - time_start)/100)/10;
    count.textContent = times.length;
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
  }else if(operation == "%"){
    return num1 * num2 / 100;
  }else{
    return num1*num2;
  }
}

function assign_nums(){
  n1 = Math.floor(Math.random() * max);
  n2 = Math.floor(Math.random() * max);
  if(cop == "-"){
    n2 = Math.floor(Math.random() * n1);
  }
  if(cop == "/"){
    n2 = Math.max(Math.floor(Math.random() * Math.sqrt(n1))+1, 1);
    //console.log(n1, n2);
    n1 = Math.max(Math.floor(n1/n2) * n2, 1);
    if(Math.random() < .5){
      n2 = n1/n2;
    }
    //console.log(n1);
  }
  if(cop == "%") {
    n1 = Math.floor(Math.random() * 100);
  }
  return [n1, n2];
}

var times = [];
var time_start = 0;

function new_problem(){
  op_display.textContent = cop;
  nums = assign_nums();
  n1 = nums[0];
  n2 = nums[1];
  a = answer(cop, n1, n2);
  n1e.textContent = n1;
  n2e.textContent = n2;
  if (cop ==  "%"){
    op_display.textContent = "of";
    n1e.textContent = `${n1}%`
  }
  //console.log(n1, cop, n2, a);
  time_start = Date.now();
  console.log(time_start);
}










