function size(){
let num = Number(prompt("How long are you"));
let result= ("");
document.getElementById("size").innerHTML=result;
if (num < 140) {
  prompt("You are short.");
} else if (num < 175) {
  prompt("You are average long.");
} else if (num< 250){
  prompt("You are long!");
} else if (num > 250)
prompt("You are a giant!!!");
}