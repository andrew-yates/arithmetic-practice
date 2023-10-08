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
//DONE - keep track of question timings over time
//DONE - display all time answered



var cop = "+";
var strop = "add";
var operations = ["add", "sub", "mult", "div", "percentage"];
for(var i = 0; i < operations.length; i++){
  var opel = document.getElementById(operations[i]);
  opel.onclick = function(){
    console.log(this.value);
    cop = this.value;
    strop = this.id;
    new_problem();
  }
}

const timings = JSON.parse(localStorage.getItem("timings")) || {};
operations.forEach(op => {
  if(!timings[op]) {
    timings[op] = [];
  }
})

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
var alltimecount = document.getElementById("alltimecount");
ans_in.oninput = function(){
  ans = ans_in.value;
  if(ans == a || (cop == "%" && (Math.abs(ans - a) < ans * .05))){
    ans_in.value = '';
    times.push(Date.now() - time_start);
    const time = Math.floor((Date.now() - time_start)/100)/10
    rtime.textContent = time;

    timings[strop].push([time, max, Date.now()]);
    localStorage.setItem("timings", JSON.stringify(timings))
    count.textContent = times.length;
    alltimecount.textContent = Object.values(timings)
      .reduce((acc, val) => acc + val.length, 0)
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

const gcd = (a,b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
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
    // What I would like to do: come up with a percentage that ends in a 5 or 0 and a number,
    // where the percentage of that number is a whole number.
    // let percent = Math.floor(Math.random() * 20) * 5;
    let m5 = Math.floor(Math.random() * 20);
    let mustBeMultipleOf = 20 / gcd(m5, 20);
    let num = Math.floor(Math.random() * max/mustBeMultipleOf) * mustBeMultipleOf;
    let percent = m5 * 5;
    if (Math.random() > .5) {
      percent = percent + 100;
    }
    n1 = percent;
    n2 = num;
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
    n1e.textContent = `${Math.round(n1 * 100)/100}%`
  }
  //console.log(n1, cop, n2, a);
  time_start = Date.now();
  console.log(time_start);
}










