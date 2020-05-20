tableInput = document.querySelector("#tableInput");
showtable = document.querySelector("#showtable");
tableInput.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    let num = event.target.value;
    let str = "";
    for (let i = 1; i <= 10; i++) {
      str += `${num}  * ${i}  =  ${num * i}<br>`;
    }
    showtable.innerHTML = str;
  }

  if (event.target.value == "") {
    showtable.innerHTML = "";
  }
  somevariable = null;
  console.log(somevariable);
});

const addBtn =  document.querySelector("#idAddBtn");
const mulBtn =  document.querySelector("#idMulbtn");
const resultId = document.querySelector("#showresult");


compute = function(ope){
   
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value; 
  let str = "";
  let res = 0;
  if(ope === "+"){
     res = Number.parseInt(num1) + Number.parseInt(num2); 
     str = `<h5 class='text-success mt-1'>Result: ${num1} + ${num2} =  ${res}</h5>`;
  }
  else if(ope === "*"){
      res = Number.parseInt(num1) * Number.parseInt(num2); 
      str = `<h5 class='text-success mt-1'>Result: ${num1} * ${num2} =  ${res}</h5>`;
  }
  return str;
}    



addBtn.addEventListener('click',(event)=>{
   resultId.innerHTML = compute("+");
});

mulBtn.addEventListener('click',(event)=>{
    resultId.innerHTML = compute("*");
});
