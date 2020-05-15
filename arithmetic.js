//options:
//operation
//number sizes
//carrying or not carrying

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

var op_display = document.getElementById("od");
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");

function new_problem(){
  op_display.textContent = cop;
  console.log(op_display.getBoundingClientRect().width);
}









